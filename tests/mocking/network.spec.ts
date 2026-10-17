import { test, expect } from '@playwright/test';

test('mock an API response with page.route', async ({ page }) => {
  await page.route('**/api/users', (route) =>
    route.fulfill({ json: [{ id: 1, name: 'Mocked User' }] }),
  );
  await page.setContent('<div id="out"></div>');
  await page.evaluate(async () => {
    const res = await fetch('https://example.com/api/users');
    const users = await res.json();
    document.getElementById('out')!.textContent = users[0].name;
  });
  await expect(page.locator('#out')).toHaveText('Mocked User');
});

test('abort images and simulate failure', async ({ page }) => {
  await page.route('**/*.{png,jpg}', (route) => route.abort());
  await page.route('**/fail', (route) => route.fulfill({ status: 500, body: 'boom' }));
  await page.goto('about:blank');
  const status = await page.evaluate(() =>
    fetch('https://example.com/fail').then((r) => r.status),
  );
  expect(status).toBe(500);
});

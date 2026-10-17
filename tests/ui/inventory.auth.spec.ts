import { test, expect } from '@playwright/test';

// Runs with storageState from the setup project: no login needed.
test('authenticated session opens inventory directly', async ({ page }) => {
  await page.goto('/inventory.html');
  await expect(page.locator('[data-test="title"]')).toHaveText('Products');
});

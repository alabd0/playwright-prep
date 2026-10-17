import { test, expect } from '@playwright/test';

// First run: `npx playwright test --project=visual --update-snapshots`
test('login page screenshot', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveScreenshot('login.png', { maxDiffPixelRatio: 0.02 });
});

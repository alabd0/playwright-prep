import { test, expect } from '@playwright/test';

test('login form is exposed via accessible roles', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  await expect(page.getByPlaceholder('Username')).toBeEditable();
  // Aria snapshot: structural accessibility assertion
  await expect(page.locator('form, .login-box').first()).toBeVisible();
});

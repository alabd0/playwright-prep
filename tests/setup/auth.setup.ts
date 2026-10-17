import { test as setup } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { InventoryPage } from '../../pages/InventoryPage';

setup('authenticate and save storageState', async ({ page }) => {
  const login = new LoginPage(page);
  await login.goto();
  await login.login(process.env.USERNAME ?? 'standard_user', process.env.PASSWORD ?? 'secret_sauce');
  await new InventoryPage(page).expectLoaded();
  await page.context().storageState({ path: 'playwright/.auth/user.json' });
});

import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { InventoryPage } from '../pages/InventoryPage';

type Fixtures = {
  loginPage: LoginPage;
  inventoryPage: InventoryPage;
  loggedInInventory: InventoryPage;
};

export const test = base.extend<Fixtures>({
  loginPage: async ({ page }, use) => {
    await use(new LoginPage(page));
  },
  inventoryPage: async ({ page }, use) => {
    await use(new InventoryPage(page));
  },
  loggedInInventory: async ({ page, loginPage, inventoryPage }, use) => {
    await loginPage.goto();
    await loginPage.login(
      process.env.USERNAME ?? 'standard_user',
      process.env.PASSWORD ?? 'secret_sauce',
    );
    await inventoryPage.expectLoaded();
    await use(inventoryPage);
  },
});

export { expect };

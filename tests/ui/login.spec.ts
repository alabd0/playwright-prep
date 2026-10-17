import { test } from '../../fixtures';

test.describe('login', () => {
  test('valid user reaches inventory', async ({ loginPage, inventoryPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'secret_sauce');
    await inventoryPage.expectLoaded();
  });

  test('locked out user sees error', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('locked_out_user', 'secret_sauce');
    await loginPage.expectError(/locked out/i);
  });

  test('wrong password shows error', async ({ loginPage }) => {
    await loginPage.goto();
    await loginPage.login('standard_user', 'nope');
    await loginPage.expectError(/do not match/i);
  });
});

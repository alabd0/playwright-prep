import { test } from '../../fixtures';

test('add product to cart updates badge', async ({ loggedInInventory }) => {
  await loggedInInventory.addToCart('Sauce Labs Backpack');
  await loggedInInventory.expectCartCount(1);
});

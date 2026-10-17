import { type Locator, type Page, expect } from '@playwright/test';

export class InventoryPage {
  readonly title: Locator;
  readonly items: Locator;
  readonly cartBadge: Locator;

  constructor(private readonly page: Page) {
    this.title = page.locator('[data-test="title"]');
    this.items = page.locator('[data-test="inventory-item"]');
    this.cartBadge = page.locator('[data-test="shopping-cart-badge"]');
  }

  async addToCart(productName: string) {
    await this.items
      .filter({ hasText: productName })
      .getByRole('button', { name: 'Add to cart' })
      .click();
  }

  async expectLoaded() {
    await expect(this.page).toHaveURL(/inventory\.html/);
    await expect(this.title).toHaveText('Products');
  }

  async expectCartCount(count: number) {
    await expect(this.cartBadge).toHaveText(String(count));
  }
}

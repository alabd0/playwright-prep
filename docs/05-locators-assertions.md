# Locators & Assertions
## Priority
`getByRole` > `getByLabel` > `getByPlaceholder` > `getByText` > `getByTestId` > CSS/XPath.
```ts
page.getByRole('button', { name: 'Login' });
page.locator('[data-test="inventory-item"]').filter({ hasText: 'Backpack' });
page.getByRole('listitem').nth(0);
```
- Locators are lazy and auto-wait; actionability: visible, stable, enabled, receives events.
- Strict mode: locator matching >1 element throws on actions.

## Assertions
- Web-first (auto-retrying): `await expect(locator).toBeVisible()`, `toHaveText`, `toHaveURL`, `toHaveCount`.
- Non-retrying: `expect(value).toBe(...)` — only for resolved values.
- Soft: `expect.soft(...)`; custom timeout: `{ timeout: 10_000 }`; polling: `expect.poll(...)`, `expect(...).toPass()`.

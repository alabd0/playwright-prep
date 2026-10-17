# Codegen
```bash
npx playwright codegen https://www.saucedemo.com
npx playwright codegen --device="iPhone 14" <url>
npx playwright codegen --save-storage=playwright/.auth/user.json <url>
npx playwright codegen --load-storage=playwright/.auth/user.json <url>
```
- Records actions and generates locators (prefers role/label/test id).
- Use "Pick locator" and assertion buttons (visible, text, value).
- Treat output as a draft: move into Page Objects, replace brittle selectors, add web-first assertions.

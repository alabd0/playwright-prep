# Playwright + TypeScript Interview Prep

A learning repo with practical examples against [saucedemo](https://www.saucedemo.com) and [jsonplaceholder](https://jsonplaceholder.typicode.com).

## Quick start
```bash
npm install
npx playwright install --with-deps
cp .env.example .env
npm test              # everything
npm run test:ui       # UI mode
npm run test:debug    # inspector
npm run report        # HTML report
```

## Layout
| Path | Purpose |
|---|---|
| `playwright.config.ts` | Projects: setup (auth), browsers, mobile, mocking, visual, api |
| `pages/` | Page Object Model classes |
| `fixtures/` | Custom fixtures (`loginPage`, `loggedInInventory`) |
| `tests/ui` | UI tests (+ `*.auth.spec.ts` using saved storageState) |
| `tests/setup` | Auth setup writing `playwright/.auth/user.json` |
| `tests/mocking` | `page.route` network mocking |
| `tests/api` | `request` fixture API tests |
| `tests/visual` | Screenshot and accessibility examples |
| `.github/workflows` | CI |
| `.vscode/mcp.json` | Playwright MCP server config |
| `docs/` | Interview prep notes |

## Docs
[CLI](docs/01-cli.md) · [Codegen](docs/02-codegen.md) · [Debugging & tracing](docs/03-debugging-tracing.md) · [MCP](docs/04-mcp.md) · [Locators & assertions](docs/05-locators-assertions.md) · [Best practices](docs/06-best-practices.md) · [Interview Q&A](docs/07-interview-qa.md)

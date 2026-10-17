# Debugging & Tracing
## Debug
- `npx playwright test --debug` or `PWDEBUG=1`; `await page.pause()` for a breakpoint.
- UI mode (`--ui`): time travel, watch mode, locator picker.
- VS Code extension: run with breakpoints, "show browser".

## Trace Viewer
- Config: `trace: 'on-first-retry'` (CI default here); `'retain-on-failure'`, `'on'` for local.
- Open: `npx playwright show-trace test-results/<test>/trace.zip` or via HTML report; also https://trace.playwright.dev.
- Shows actions timeline, DOM snapshots before/after, network, console, source, errors.

## Debugging flaky tests
1. Reproduce: `--repeat-each=20 --workers=4`; compare with `--workers=1` (test isolation/shared state?).
2. Read trace of the failing retry: was the element not ready, covered, or detached?
3. Replace `waitForTimeout` with web-first assertions / `waitForResponse`.
4. Remove inter-test dependence; use fixtures and fresh contexts.
5. Mock unstable third-party/network data.
6. Check for animations, race with navigation, non-unique locators (strict mode violations).
7. Tag with `test.fixme`/`test.fail` only as a temporary, tracked measure.

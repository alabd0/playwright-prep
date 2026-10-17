# Interview Q&A
**Why Playwright over Selenium?** Auto-waiting, browser contexts, built-in tracing/mocking/API testing, parallelism, multi-browser from one API.

**What is a browser context?** Isolated incognito-like profile; cheap, gives test isolation.

**How does auto-wait work?** Actions wait for actionability checks; assertions retry until timeout.

**How do you handle auth?** Setup project logs in once, saves `storageState`, dependent projects load it.

**Fixtures vs beforeEach?** Fixtures are lazy, typed, composable, scoped (test/worker), and handle teardown.

**How do you mock network?** `page.route(url, route => route.fulfill/abort/continue)`; `routeFromHAR`.

**How do you debug a flaky test?** See docs/03: repeat-each, trace, remove sleeps, isolate state.

**Handle iframes/new tabs/dialogs?** `frameLocator`, `context.waitForEvent('page')`, `page.on('dialog')`.

**Visual testing?** `toHaveScreenshot` with baselines, thresholds, `--update-snapshots`.

**Parallelism?** Files run in parallel across workers; `fullyParallel` parallelizes tests in a file; `--shard` splits across machines.

**API testing?** `request` fixture / `APIRequestContext`, shares config and storageState.

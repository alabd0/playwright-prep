# Best Practices
- Test user-visible behavior; prefer role/test-id locators.
- Keep tests independent; one fresh context per test.
- Use storageState via a setup project instead of logging in each test.
- No hard sleeps; rely on auto-wait and web-first assertions.
- POM for structure; fixtures for setup/teardown and dependency injection.
- Mock third parties; test your own API directly with `request`.
- Trace `on-first-retry`; retries only in CI.
- Run in parallel; shard in CI (`--shard=1/4`).
- Secrets in env/CI secrets, never committed.

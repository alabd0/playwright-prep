# Playwright CLI
```bash
npx playwright test                         # run all
npx playwright test tests/ui/login.spec.ts  # one file
npx playwright test -g "locked out"         # by title
npx playwright test --project=chromium      # by project
npx playwright test --headed --workers=1
npx playwright test --ui                    # UI mode
npx playwright test --debug                 # Inspector
npx playwright test --last-failed
npx playwright test --repeat-each=10        # flake hunting
npx playwright test --retries=2 --trace on
npx playwright test --update-snapshots
npx playwright show-report
npx playwright show-trace trace.zip
npx playwright install --with-deps
npx playwright codegen <url>
```

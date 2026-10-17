# Playwright MCP
Model Context Protocol server (`@playwright/mcp`) lets an LLM client (VS Code Copilot, Claude, Cursor) drive a browser via tools.

- Config: `.vscode/mcp.json` runs `npx @playwright/mcp@latest`.
- It works from **accessibility snapshots** (structured, text) rather than screenshots, so it is fast and deterministic.
- Tools: navigate, click, type, fill form, snapshot, screenshot, evaluate, network requests, console messages, tabs.
- Uses: exploratory testing, drafting tests, reproducing bugs, generating locators.
- Caveats: review generated tests, don't expose secrets, restrict to trusted origins.
- MCP vs codegen: codegen records *your* actions; MCP lets an *agent* act from natural-language goals.

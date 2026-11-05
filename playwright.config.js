const { defineConfig } = require('@playwright/test');
const docs = Boolean(process.env.PLAYWRIGHT_DOCS);
module.exports = defineConfig({
  testDir: './tests', testMatch: '**/*.spec.js', workers: 1, timeout: 120000,
  use: { channel: 'chrome', baseURL: docs ? 'http://127.0.0.1:4311/one-react/' : 'http://127.0.0.1:4311/', viewport: { width: 1440, height: 1000 }, actionTimeout: 15000, trace: 'retain-on-failure' },
  webServer: { command: docs ? 'npm run preview -- --outDir docs --base /one-react/ --port 4311 --strictPort' : process.env.PLAYWRIGHT_DEV ? 'npm run start:backend -- --port 4311 --strictPort' : 'npm run preview -- --port 4311 --strictPort', url: docs ? 'http://127.0.0.1:4311/one-react/' : 'http://127.0.0.1:4311/' },
});

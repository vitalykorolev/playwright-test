exports.config = {
  name: 'ikea',
  tests: './test_*.js',
  helpers: {
    Playwright: {
      browser: 'chromium',
      waitForNavigation: 'networkidle0',
      show: true
    }
  }
};

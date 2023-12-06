const { slackLayout } = require('./slack');
const config = {
  testDir: './tests',
  testMatch: '**/bstack_test*.js',

  /* Maximum time one test can run for. */
  timeout: 90 * 1000,
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 5000,
  },
  /* tests in parallel */
  workers: 1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    [
      "./node_modules/playwright-slack-report/dist/src/SlackReporter.js",
      {
        // channels: ["bs-test"], // provide one or more Slack channels
        slackWebHookUrl: "Please add the slack weh hook url here",
        sendResults: "always", // "always" , "on-failure", "off"
        layout: slackLayout
      },
    ],
    ["dot"], // other reporters
  ],
  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chrome',
      use: {
        browserName: 'chromium',
        channel: 'chrome',
      },
    },
  ],
};

module.exports = config;

import { defineConfig, devices } from '@playwright/test';

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Maximum time one test can run for. */
  timeout: 30 * 1000,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 1,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [
    ['line'],
    ['html'], //{open: 'never', outputFolder: 'playwright-reports/html'}],
    ['junit', {outputFile: 'test-results/junit/junit-result.xml'}],
    //["allure-playwright"],
    
  ],
  
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on-first-retry',
  },
  
  expect: {
    /**
     * Maximum time expect() should wait for the condition to be met.
     * For example in `await expect(locator).toHaveText();`
     */
    timeout: 7000,
  },

  /* Configure projects for major browsers */
  projects: [
     // {
    //   name: 'Chrome',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     browserName: 'chromium',
    //     viewport: {width: 1280, height: 720},
    //     ignoreHTTPSErrors: true,
    //     video: 'on',
    //     headless: true,
    //     screenshot: 'only-on-failure',
    //     trace: 'on',
    //   },
    // },

    // {
    //   name: 'ChromeHeaded',
    //   use: {
    //     ...devices['Desktop Chrome'],
    //     browserName: 'chromium',
    //     viewport: {width: 1280, height: 720},
    //     ignoreHTTPSErrors: true,
    //     video: 'off',
    //     headless: false,
    //     screenshot: 'only-on-failure',
    //     trace: 'on',
    //   },
    // },

    // {
    //   name: 'Firefox',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     browserName: 'firefox',
    //     viewport: {width: 1280, height: 720},
    //     ignoreHTTPSErrors: true,
    //     video: 'on',
    //     headless: true,
    //     screenshot: 'only-on-failure',
    //     trace: 'on',
    //   },
    // },

    // {
    //   name: 'FirefoxHeaded',
    //   use: {
    //     ...devices['Desktop Firefox'],
    //     browserName: 'firefox',
    //     viewport: {width: 1280, height: 720},
    //     ignoreHTTPSErrors: true,
    //     video: 'off',
    //     headless: false,
    //     screenshot: 'only-on-failure',
    //     trace: 'on',
    //   },
    // },

    // {
    //   name: 'Safari',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     browserName: 'webkit',
    //     viewport: {width: 1280, height: 720},
    //     ignoreHTTPSErrors: true,
    //     video: 'on',
    //     headless: true,
    //     screenshot: 'only-on-failure',
    //     trace: 'on',
    //   },
    // },

    // {
    //   name: 'SafariHeaded',
    //   use: {
    //     ...devices['Desktop Safari'],
    //     browserName: 'webkit',
    //     viewport: {width: 1280, height: 720},
    //     ignoreHTTPSErrors: true,
    //     video: 'off',
    //     headless: false,
    //     screenshot: 'only-on-failure',
    //     trace: 'on',
    //   },
    // },

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
        {
       name: 'Microsoft Edge',
       use: { ...devices['Desktop Edge'], channel: 'msedge' },
       name: 'Google Chrome',
       use: { ..devices['Desktop Chrome'], channel: 'chrome' },
     },
   ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

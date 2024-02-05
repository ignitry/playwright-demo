import { PlaywrightTestConfig, devices } from '@playwright/test';

const config: PlaywrightTestConfig = {
  forbidOnly: !!process.env.CI,
  reporter: [
    ['list'],
    ['html', {
      open: 'never',
      // host: '0.0.0.0',
      port: 9323,
    }],
    // ['json', {  outputFile: 'playwright-report/test-results.json' }]
  ], // options: line, list, dot and html, json with configurable outputFile
  workers: process.env.WORKERS ? 1 : undefined,
  retries: process.env.RETRIES ? 2 : 0,
  use: {
    // viewport: { width: 640, height: 1480 },
    trace: 'on-first-retry',
    launchOptions: {
      // ลดความเร็วระหว่าง action ให้ video สามารถจับภาพที่ตรวจสอบได้ง่าย
      // slowMo: 1000,
    },
    video: {
      mode: 'retain-on-failure', //https://playwright.dev/docs/videos
      // size: { width: 640, height: 960 }
    }
  },
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },
    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },
    // Use only chromium for speed.
  ],
};
export default config;

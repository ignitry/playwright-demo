import { test, expect } from '@playwright/test';

const HOST: string = process.env.HOST || 'http://localhost:9292';

test.use({ viewport: { width: 480, height: 1200 } });

test('Access Homepage', async ({ page }) => {
  await page.goto(HOST);
  const title = page.locator('h1');
  await expect(title).toHaveText('Home');
});

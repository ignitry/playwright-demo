import { test, expect } from '@playwright/test';

const HOST: string = process.env.HOST || 'http://localhost:9292';

test("Sign out from application successfully", async ({ page }) => {
  await page.goto(HOST + '/signout');
  const title = page.locator('h1');
  await expect(title).toHaveText('Home');
  await expect(page.locator('a.signout-btn')).toHaveCount(0);
});

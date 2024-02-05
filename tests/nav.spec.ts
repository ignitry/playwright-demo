import { test, expect } from '@playwright/test';

const HOST: string = process.env.HOST || 'http://localhost:9292';

test("Nav doesn't display signout if not signed in", async ({ page }) => {
  await page.goto(HOST);
  await expect(page.locator('a.signout-btn')).toHaveCount(0);
});

test("Nav  display signout if signed in", async ({ page }) => {
  await page.goto(HOST + '/signin');
  await page.fill('input[name="username"]', 'user');
  await page.fill('input[name="password"]', 'secret123');
  await page.click('input[name="signin-btn"]');
  await page.goto(HOST);

  const signoutBtn = page.locator('a.signout-btn');
  await expect(signoutBtn).toHaveText('Sign Out');
});

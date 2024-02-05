import { test, expect } from '@playwright/test';

const HOST: string = process.env.HOST || 'http://localhost:9292';
const wrongCredentialsWarning = 'You could not be signed in. Did you enter the correct username and password?';

test('Access Sign In page', async ({ page }) => {
  await page.goto(HOST + '/signin');
  const title = page.locator('h1');
  await expect(title).toHaveText('Sign In');
});

test('Sign in with correct credentials', async ({ page }) => {
  await page.goto(HOST + '/signin');
  await page.fill('input[name="username"]', 'user');
  await page.fill('input[name="password"]', 'secret123');
  await page.click('input[name="signin-btn"]');

  const title = page.locator('h1');
  await expect(title).toHaveText('Home');
});

test('Sign in with incorrect credentials', async ({ page }) => {
  await page.goto(HOST + '/signin');
  await page.fill('input[name="username"]', 'user');
  await page.fill('input[name="password"]', 'secret1234');
  await page.click('input[name="signin-btn"]');

  const title = page.locator('p.notice');
  await expect(title).toHaveText(wrongCredentialsWarning);
});

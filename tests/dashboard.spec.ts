import { test, expect } from '@playwright/test';

// ประกาศค่า Host หรือปรับเปลี่ยนค่าตรงนี้
const HOST: string = process.env.HOST || 'http://localhost:9292';

// ต้องการให้ User ถูก redirect จากหน้า Dashboard
// ไปที่หน้า Sign In ในกรณีที่ยังไม่ได้ Sign In
test('Access Dashboard if not signed in', async ({ page }) => {
  await page.goto(HOST + '/dashboard');

  const title = page.locator('h1');
  await expect(title).toHaveText('Sign In');
});

//
test('Access Dashboard when signed in', async ({ page }) => {
  // ทำการ Sign in ก่อน
  await page.goto(HOST + '/signin');
  await page.fill('input[name="username"]', 'user');
  await page.fill('input[name="password"]', 'secret123');
  await page.click('input[name="signin-btn"]');

  // คลิ๊ก dashboard หลังจากที่ sign in แล้ว
  await page.click('a.dashboard-btn');
  const title = page.locator('h1');
  await expect(title).toHaveText('Dashboard');
});

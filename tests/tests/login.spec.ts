import { test, expect } from '@playwright/test';

test('should sign in with valid credentials', async ({ page }) => {
  await page.goto('/login');

  await expect(page).toHaveURL(/login/);

 // click 'Sign in with email' button
 await page.getByRole('button', { name: 'Sign in with email' }).click();

 // enter email
 await page.getByRole('textbox', { name: 'Email' }).fill('lanatestkorentest@gmail.com');
 // enter password
 await page.getByRole('textbox', { name: 'Password' }).fill('Test12345!');
 // sign in
 await page.getByRole('button', { name: 'Sign in', exact: true }).click();

 await expect(page).toHaveURL(/dashboard/);
});
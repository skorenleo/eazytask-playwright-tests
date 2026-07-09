import { test, expect } from '@playwright/test';
test.describe('Login', () => {

  // positive test
  test('should sign in with valid credentials', async ({ page }) => {
    // Test data
    const validEmail = 'lanatestkorentest@gmail.com';
    const validPassword = 'Test12345!';

    // Test steps
    await page.goto('/login');
    await expect(page).toHaveURL(/login/);
    // click 'Sign in with email' button
    await page.getByRole('button', { name: 'Sign in with email' }).click();
    // enter valid email
    await page.getByRole('textbox', { name: 'Email' }).fill(validEmail);
    // enter valid password
    await page.getByRole('textbox', { name: 'Password' }).fill(validPassword);
    // sign in
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    // Assertions
    await expect(page).toHaveURL(/dashboard/);
  });


  // negative test
  test('should show an error for invalid password', async ({ page }) => {
    // Test data
    const invalidEmail = 'testtest@gmail.com';
    const invalidPassword = 'Test6789!';

    // Test steps
    await page.goto('/login');
    await expect(page).toHaveURL(/login/);
    // click 'Sign in with email' button
    await page.getByRole('button', { name: 'Sign in with email' }).click();
    // enter invalid email
    await page.getByRole('textbox', { name: 'Email' }).fill(invalidEmail);
    // enter invalid password
    await page.getByRole('textbox', { name: 'Password' }).fill(invalidPassword);
    // sign in
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    // Assertions
    await expect(page.locator('[data-sonner-toast][data-type="error"]').filter({ hasText: /Firebase: Error \(auth\/invalid-credential/i }).first()).toBeVisible();
    await expect(page).toHaveURL(/login/);
    await expect(page.getByRole('textbox', { name: 'Email' })).toHaveValue(invalidEmail);
    await expect(page.getByRole('textbox', { name: 'Password' })).toHaveValue(invalidPassword);
  });

  // negative test
  test('should show validation errors for empty fields', async ({ page }) => {

    // Test steps
    await page.goto('/login');
    await expect(page).toHaveURL(/login/);
    // click 'Sign in with email' button
    await page.getByRole('button', { name: 'Sign in with email' }).click();
    // sign in
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();

    // Assertions
    await expect(page).toHaveURL(/login/);
    await expect(page.getByText('Invalid email address')).toBeVisible();
    await expect(page.getByText('Password must be at least 6')).toBeVisible();

  });

});
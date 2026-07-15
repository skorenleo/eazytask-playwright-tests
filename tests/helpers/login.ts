import { Page, expect } from '@playwright/test';
export async function login(page: Page) {
    const validEmail = 'lanatestkorentest@gmail.com';
    const validPassword = 'Test12345!';

    // Steps
    await page.goto('/login');
    await expect(page).toHaveURL(/login/);
    await page.getByRole('button', { name: 'Sign in with email' }).click();
    await page.getByRole('textbox', { name: 'Email' }).fill(validEmail);
    await page.getByRole('textbox', { name: 'Password' }).fill(validPassword);
    await page.getByRole('button', { name: 'Sign in', exact: true }).click();
    await expect(page).toHaveURL(/dashboard/);
    
}


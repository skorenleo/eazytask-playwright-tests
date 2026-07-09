import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test.describe('Sign out', () => {
    test.beforeEach(async ({ page }) => {
        await login(page);
    });

    test('should sign out the user', async ({ page }) => {
        await page.getByRole('button').filter({ has: page.locator('[data-slot="avatar"]') }).click();
        await page.getByRole('menuitem', { name: 'Logout' }).click();

        await expect(page).toHaveURL(/login/);
    });
});    
import { test, expect } from '@playwright/test';

test('should open login page', async ({ page }) => {
  await page.goto('/login');

  await expect(page).toHaveURL(/login/);
});
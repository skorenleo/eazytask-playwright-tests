import { Page, expect } from '@playwright/test';

export async function openProject(page: Page, projectName: string) {
    // steps
    await expect(page.getByRole('link', { name: projectName })).toBeVisible();
    await page.getByRole('link', { name: projectName }).click();
    await expect(page).toHaveURL(/\/projects\/.*\/overview/);
}
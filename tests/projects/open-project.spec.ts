import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';
import { openProject } from '../helpers/open-project';

test.describe('Open Project', () => {
    const projectName = 'Test 3';
    test.beforeEach(async ({ page }) => {
        await login(page);
    });


    test.skip('should open existing project', async ({ page }) => {
        await openProject(page, projectName);
        // Assertions
        await expect(page.getByRole('heading', { name: projectName })).toBeVisible();

    });


    test('should check overview page elements', async ({ page }) => {
        await openProject(page, projectName);
        await expect(page.getByRole('heading', { name: projectName })).toBeVisible({ timeout: 10000 });;

        // project overview page elements
        
        await expect(page.getByRole('button', { name: 'Edit' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Team' }).nth(1)).toBeVisible(); 
        await expect(page.getByRole('button', { name: 'Add cover image' })).toBeVisible();

        await expect(page.getByRole('main').getByRole('link', { name: 'Tasks' })).toBeVisible();
        await expect(page.getByRole('main').getByRole('link', { name: 'Chat' })).toBeVisible();
        await expect(page.getByRole('main').getByRole('link', { name: 'Files' })).toBeVisible();
        await expect(page.getByRole('link', { name: 'Team' }).nth(2)).toBeVisible();

        await expect(page.getByRole('button', { name: 'New Task' })).toBeVisible();
        await expect(page.getByRole('main').getByRole('link', { name: 'View All' }).first()).toBeVisible();

        await expect(page.getByRole('button', { name: 'Create first task' })).toBeVisible();
    });
}); 
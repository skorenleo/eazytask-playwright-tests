import { test, expect } from '@playwright/test';
import { login } from '../helpers/login';

test.describe('Create New Project', () => {
    test.beforeEach(async ({ page }) => {
        await login(page);

    });

    test.skip('should create first project', async ({ page }) => {

        // verify user has no projects
        await expect(page.getByRole('listitem').nth(1)).toBeHidden({ timeout: 20000 });
        await expect(page.getByText('Create your first project to')).toBeVisible();

        // Test steps
        await page.getByRole('button', { name: 'Create Your First Project' }).click();
        await page.getByRole('textbox', { name: 'Project Name *' }).click();
        await page.getByRole('textbox', { name: 'Project Name *' }).fill('My First Project');

        await page.getByRole('textbox', { name: 'Description *' }).click();
        await page.getByRole('textbox', { name: 'Description *' }).fill('This is a simple project description.');

        await page.getByRole('button', { name: 'Create Project' }).click();

        // Assertions
        await expect(page.getByRole('listitem').
            filter({ hasText: 'Project created successfully!' }).first()).toBeVisible();


        await expect(page.getByRole('button', { name: 'My First Project' })).toBeVisible();

    });



    test('should create additional project', async ({ page }) => {

        const NameAddProject = 'Test 3';

        // verify user has at least one project
        await expect(page.getByRole('listitem').nth(1)).toBeHidden({ timeout: 20000 });

        // create additional project
        await page.getByRole('button', { name: 'New Project', exact: true }).click();
        await page.getByRole('textbox', { name: 'Project Name *' }).click();
        await page.getByRole('textbox', { name: 'Project Name *' }).fill(NameAddProject);
        await page.getByRole('textbox', { name: 'Description *' }).click();
        await page.getByRole('textbox', { name: 'Description *' }).fill('This is a simple project description.');
        await page.getByRole('button', { name: 'Create Project' }).click();

        // Assertions
        await expect(page.getByRole('listitem').
            filter({ hasText: 'Project created successfully!' }).first()).toBeVisible();
        await expect(page.getByRole('button', { name: NameAddProject })).toBeVisible();
    });
});


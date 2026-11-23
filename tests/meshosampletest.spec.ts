import { test, expect } from '@playwright/test';

test('sample test', async ({ page }) => {
    await page.goto('https://www.meesho.com/');
    await page.getByRole('textbox', { name: 'Try Saree, Kurti or Search by Product Code' }).pressSequentially('Mobile');
    const getsuggestions = await page.locator('//p[@class="sc-dOfePm MvxNU sc-cQSRAa iSwobE"]')
    await expect(getsuggestions).toBeVisible();
    await getsuggestions.allTextContents();




});

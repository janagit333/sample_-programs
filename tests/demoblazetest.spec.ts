import { test, expect } from '@playwright/test';

test('adding product ot cart', async ({ page }) => {

    await page.goto('https://www.demoblaze.com/index.html');
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill('peddaiah');
    await page.locator('#loginpassword').fill('infotech@1');
    await page.getByRole('button', { name: 'Log in' }).click();
    const Text = await page.getByRole('link', { name: 'PRODUCT STORE' })
    console.log(Text.textContent());










})
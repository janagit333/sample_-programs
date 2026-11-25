import { test, expect } from '@playwright/test';

// test('adding product to cart', async ({ page }) => {
//     await page.goto('https://www.demoblaze.com/index.html');
//     await page.getByRole('link', { name: 'Log in' }).click();
//     await page.locator("#loginusername").fill("Peddaiah")
//     await page.locator('#loginpassword').fill("infotech@1")
//     await page.getByRole('button', { name: 'Log in' }).click();
//     await page.getByRole('link', { name: 'Laptops' }).click();
//     const product = page.getByRole('link', { name: 'Sony vaio i5' });
//     await expect(product).toBeVisible();
//     await product.click();

//     const dialogPromise = page.waitForEvent('dialog');
//     const addToCartPromise = page.getByRole('link', { name: 'Add to cart' }).click();
//     const dialog = await dialogPromise;
//     expect(dialog.message()).toBe('Product added');
//     await dialog.accept();
//     await addToCartPromise;
// })




test('adding product to cart', async ({ page }) => {
    const username = `peddaiah${Date.now()}`;   // new user every run
    const password = 'Test@123';

    // Accept every alert and remember its text
    const alerts: string[] = [];
    page.on('dialog', async (dialog) => {
        console.log('ALERT:', dialog.message());
        alerts.push(dialog.message());
        await dialog.accept();
    });
    const lastAlert = () => alerts[alerts.length - 1];

    await page.goto('https://www.demoblaze.com/index.html');

    // Sign up
    await page.getByRole('link', { name: 'Sign up' }).click();
    await page.locator('#sign-username').fill(username);
    await page.locator('#sign-password').fill(password);
    await page.getByRole('button', { name: 'Sign up' }).click();
    await expect.poll(lastAlert).toContain('Sign up successful');
    await expect(page.locator('#signInModal')).toBeHidden();

    // Login
    await page.getByRole('link', { name: 'Log in' }).click();
    await page.locator('#loginusername').fill(username);
    await page.locator('#loginpassword').fill(password);
    await page.getByRole('button', { name: 'Log in' }).click();
    await expect(page.getByText(`Welcome ${username}`)).toBeVisible();
    await expect(page.locator('#logInModal')).toBeHidden();

    // Select the product
    await page.getByRole('link', { name: 'Laptops' }).click();
    const product = page.getByRole('link', { name: 'Sony vaio i5' });
    await expect(product).toBeVisible();
    await product.click();

    // Add to cart
    const addToCart = page.getByRole('link', { name: 'Add to cart' });
    await expect(addToCart).toBeVisible();
    await addToCart.click();
    await expect.poll(lastAlert).toContain('Product added');
});
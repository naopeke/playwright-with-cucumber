import { Before, Given, When, Then } from "@cucumber/cucumber";
import { Page, Browser, chromium, expect } from "@playwright/test";
import { BasePage } from "../../pages/base.page";

let browser: Browser;
let page: Page;
let basePage: BasePage;

Before({ tags: '@login' }, async function(){
    const result = await BasePage.create();
    browser = result.browser;
    page = result.page;
    basePage = new BasePage(browser, page);

    await page.goto('https://www.saucedemo.com');
    await page.fill('input[data-test="username"]', 'standard_user');
    await page.fill('input[data-test="password"]', 'secret_sauce');
    await page.click('input[data-test="login-button"]');
})

Given ('A web browser is at the inventory page', async function(){
    await page.goto('https://www.saucelabs.com/inventory.html');
    await expect(page).toHaveURL(/inventory/);
})

// // When ('A user clicks "Add to cart" button for the product {string}', async function(itemName: string){
// //     const itemId = itemName.toLowerCase().replace(/\s+/g, '-');
// //     console.log('item Id: ', itemId)
// //     await page.click(`[data-test="add-to-cart-${itemId}"]`);
// //     await expect(page.locator(itemId)).toBeVisible({ timeout: 10000 })
// //     await page.locator(itemId).scrollIntoViewIfNeeded();
// //     await page.click(`[data-test="add-to-cart-${itemId}"]`);
// // })


// When ('A user clicks "Add to cart" button for the product "Sauce Labs Backpack"', async function(){
//     const addButton = page.locator('#add-to-cart-sauce-labs-backpack');
//     await page.click(`[data-test="add-to-cart-${itemId}"]`);
//     await expect(addButton).toBeVisible({ timeout: 10000 })
//     await addButton.scrollIntoViewIfNeeded();
//     await addButton.click();
// })

// // Then ('A cart badge should display {string}', async function(productsCounter: string){
// //     const badge = page.locator('[data-test="shopping-cart-badge"]');
// //     await expect(badge).toBeVisible();
// //     await expect(badge).toHaveText('1');
// // })
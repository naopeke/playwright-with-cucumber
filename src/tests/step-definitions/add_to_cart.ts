import { Given, When, Then } from "@cucumber/cucumber";
import { Page, Browser, chromium, expect } from "@playwright/test";
import { BasePage } from "pages/base.page";

let browser: Browser;
let page: Page;

Given ('A web browser is at the inventory page', async function(){
    // browser = await chromium.launch({
    //     headless: false,
    //     slowMo: 1000,
    //     devtools: true
    // });

    // page = await browser.newPage();
    const result = await BasePage.create();
    browser = result.browser;
    page = result.page;
    await page.goto('https://www.saucedemo.com/inventory.html');
})

When ('A user clicks "Add to cart" button for the product {string}', async function(itemName: string){
    
})
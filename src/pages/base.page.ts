import { Browser, Page, chromium } from "@playwright/test";

export class BasePage {
    browser: Browser;
    page: Page;

    constructor(browser: Browser, page: Page){
        this.browser= browser;
        this.page = page;
    }

    static async create(){
        const browser = await chromium.launch({
            headless: false,
            slowMo: 1000,
            devtools: true
        });

        const page = await browser.newPage();

        return { browser, page }
    }

}

//base code
// browser = await chromium.launch({
//     headless: false,
//     slowMo: 1000,
//     devtools: true
// });

// page = await browser.newPage();
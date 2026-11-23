import { Locator, Page } from '@playwright/test';

export class MeeshoSuggestions {

    readonly page: Page;
    readonly searchbtn: Locator;
    readonly suggestionpopup: Locator;

    constructor(page: Page) {

        this.page = page;
        this.searchbtn = page.getByPlaceholder('Try Saree, Kurti or Search by Product Code')
        this.suggestionpopup = page.locator('//p[@class="sc-dOfePm MvxNU sc-cQSRAa iSwobE"]')

    }

    async launchMeeshoUrl(): Promise<void> {
        await this.page.goto('https://www.meesho.com/');

    }

    async search(query: string) {
        await this.searchbtn.fill(query, { timeout: 10000 });
    }

    async getSuggestions() {
        await this.suggestionpopup.first().waitFor({ state: 'visible' });
        return this.suggestionpopup.allTextContents();
    }
}
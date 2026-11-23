import { Locator, Page } from '@playwright/test';

export class SuggestionsPage {
    readonly page: Page;
    readonly search: Locator;
    readonly suggestions: Locator;

    constructor(page: Page) {
        this.page = page;
        this.search = page.getByLabel('Search Amazon.in');
        this.suggestions = page.locator("//div[@id='nav-flyout-searchAjax']/div[2]//div[@class='s-suggestion s-suggestion-ellipsis-direction']");
    }

    async launchUrl(url: string) {
        await this.page.goto(url);
    }

    async searchFor(query: string) {
        await this.search.fill(query);
    }

    async getSuggestions() {
        await this.suggestions.first().waitFor({ state: 'visible' });
        return this.suggestions.allTextContents();
    }
}

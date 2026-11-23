import { test } from '@playwright/test';
import { SuggestionsPage } from '../pages.ts/suggestions_page';

test('testing the suggestions', async ({ page }) => {
    const suggestionsPage = new SuggestionsPage(page);
    await suggestionsPage.launchUrl('https://www.amazon.in');
    await suggestionsPage.searchFor('mobile');
    console.log(await suggestionsPage.getSuggestions());

});
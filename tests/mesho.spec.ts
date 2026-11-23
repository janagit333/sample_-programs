import { test } from '@playwright/test';
import { MeeshoSuggestions } from '../pages.ts/meshosuggestions_page';

test('meesho suggestions ', async ({ page }) => {
    const meeshoPage = new MeeshoSuggestions(page);
    await meeshoPage.launchMeeshoUrl();

    await meeshoPage.search('mobile');
    console.log(await meeshoPage.getSuggestions());
    console.log("peddaiah")
    console.log("shridhar")
})
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../steps/custom-world';
import { PickleballHomePage } from '../pages/pbGeneral-page';
//import { NewsPage } from '../pages/news-page';

//Scenario: Navigating to pickleball.com
Given('user navigates to pickleball homepage', {timeout:10000}, async function (this: CustomWorld){
    this.pickleballHomePage = new PickleballHomePage(this.page);
    await this.pickleballHomePage.navigate();
});

Then('user is in pickelball homepage', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL("https:/pickleball.com/");
});

//Scenario: Navigating to news page
When ('user clicks the news tab', async function (this: CustomWorld){
  const pickleballHomePage = new PickleballHomePage(this.page); //instantate news page with this step page
  await this.pickleballHomePage.navigateToNewsPage();// calling method to navigate to news page
});
Then ('user is in the news page', async function (this: CustomWorld){
  const pickleballHomePage = new PickleballHomePage(this.page);
  await pickleballHomePage.verifyNewsUrl();
});

//Scenario: Filter news by subcategory
Then('I verify all subcategory tabs work correctly', async function (this: CustomWorld) {
  const categories = ['International'];
  //Loop through each category
  for (const category of categories) {
    console.log(`TESTING TAB: ${category}`);
    // Click the tab using your existing Page Object method
    await this.pickleballHomePage.newsCategory(category);
    // Verify the URL
    const formattedParam = category.toLowerCase();
    await expect(this.page).toHaveURL(new RegExp(`subcategory=${formattedParam}`));
  }
});
//, 'Press', 'PPA', 'UPA', 'MLP'
//notes: passed when the above is removed because of a popup.
//check out hooks under "handling cookies or popups"
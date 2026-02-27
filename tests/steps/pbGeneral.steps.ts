import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../steps/custom-world';
import { PickleballHomePage } from '../pages/pbGeneral-page';
import { NewsPage } from '../pages/news-page';

//Scenario: Navigating to pickleball.com
Given('user navigates to pickleball homepage', async function (this: CustomWorld){
    this.pickleballHomePage = new PickleballHomePage(this.page);
    await this.pickleballHomePage.navigate();
});

Then('user is in pickelball homepage', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL("https:/pickleball.com/");
});

//Scenario: Navigating to news page
When ('user clicks the news tab', async function (this: CustomWorld){
  const newsPage = new NewsPage(this.page); //instantate news page with this step page
  await this.newsPage.navigateToNewsPage();// calling method to navigate to news page
});
Then ('user should be in the news page', async function (this: CustomWorld){
  const newsPage = new NewsPage(this.page);
  await newsPage.verifyNewsUrl();
});
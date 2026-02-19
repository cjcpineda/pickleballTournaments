import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from '@playwright/test';
import { CustomWorld } from '../world/custom-world';
import { PickleballHomePage } from '../pages/pbGeneral-page';

Given('user navigates to pickleball homepage', async function (this:CustomWorld){
    this.pickleballHomePage = new PickleballHomePage(this.page);
    await this.pickleballHomePage.navigate();
});

Then('user should be in pickelball homepage', async function (this: CustomWorld) {
  await expect(this.page).toHaveURL(/pickleball.com/);
});

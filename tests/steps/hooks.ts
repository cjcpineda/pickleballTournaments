import { Before, After, Status, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from '../steps/custom-world';
import { PickleballHomePage } from '../pages/pbGeneral-page';
//import { NewsPage } from '../pages/news-page';

Before(async function (this: CustomWorld) {
  this.browser = await chromium.launch({ 
    headless: process.env.CI ? true : false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
  this.pickleballHomePage = new PickleballHomePage(this.page);
  //handling cookies or popups
  const cookieButton = this.page.getByRole('button', { name: /accept|agree|ok|close/i });
  if (await cookieButton.isVisible({ timeout: 3000 })) {
    await cookieButton.click();
  }
});

After(async function (this: CustomWorld) {
  // Always clean up to prevent memory leaks!
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});
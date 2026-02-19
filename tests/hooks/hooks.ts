import { Before, After, Status } from '@cucumber/cucumber';
import { chromium } from '@playwright/test';
import { CustomWorld } from '../world/custom-world';
import { PickleballHomePage } from '../pages/pbGeneral-page';

Before({ timeout: 10000 }, async function (this: CustomWorld) {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
    this.pickleballHomePage = new PickleballHomePage(this.page);
});

After(async function (this: CustomWorld) {
  // Always clean up to prevent memory leaks!
  await this.page?.close();
  await this.context?.close();
  await this.browser?.close();
});
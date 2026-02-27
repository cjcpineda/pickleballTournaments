import { expect } from '@playwright/test';
import { Page, Locator } from '@playwright/test';

export class PickleballHomePage {
    private readonly page: Page;
    readonly newsTab: Locator;
    constructor(page: Page) {
        this.page = page;
    // Define locators for elements used on the homepage.
    // Example: the "News" tab in the navigation bar.
    // Using a text matcher ensures the locator is resilient to changes
    // in attributes as long as the visible text stays the same.
    this.newsTab = page.locator('a', { hasText: 'News' });
  }

  // click the news tab to go to the news section
  async clickNewsTab() {
    await this.newsTab.click();
  }

  async navigate() {
    await this.page.goto('https://www.pickleball.com', {
      waitUntil: 'domcontentloaded', 
      timeout: 30000
  });
  }
}
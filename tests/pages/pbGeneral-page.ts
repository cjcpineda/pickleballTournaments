import { expect } from '@playwright/test';
import { Page, Locator } from '@playwright/test';

export class PickleballHomePage {
    private readonly page: Page;
    constructor(page: Page) {
        this.page = page;
    // Define your selectors here in one central place
    // ie. this.searchInput = page.locator('input[name="search_query"]');
  }

  async navigate() {
    await this.page.goto('https://www.pickleball.com');
  }
}
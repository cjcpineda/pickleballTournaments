import { expect } from '@playwright/test';
import { Page, Locator } from '@playwright/test';

export class PickleballHomePage {
  private readonly page: Page;
  readonly newsTab: Locator;
  constructor(page: Page) {
    this.page = page;
  // Define locators for elements used on the homepage.
  // Example: the "News" tab in the navigation bar.
    this.newsTab = page.locator('a', { hasText: 'News' });
    this.newsTab = page.locator('a.flex.items-center.px-2', { hasText: 'News' });
  }

  async navigate() {
    await this.page.goto('https://www.pickleball.com', {
      waitUntil: 'domcontentloaded', 
      timeout: 30000
   });
  }

  async navigateToNewsPage() {
    await this.newsTab.click(); //click news tab
  }

  async verifyNewsUrl() {
    await this.newsTab.click(); //verify news tab is visible
  }

  async newsCategory(tabName: string) {
    const cleanName = tabName.trim();
    const tab = this.page.getByRole('link', { name: tabName.trim(), exact: true });
    await tab.waitFor({ state: 'visible' });
    const isVisible = await tab.isVisible();
    console.log(`DEBUG: Is tab "${tabName}" visible? -> ${isVisible}`);
    await tab.click();
  }
}
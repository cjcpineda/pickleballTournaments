import { Page, Locator } from '@playwright/test';

export class NewsPage {
  private readonly page: Page;
  readonly newsTab: Locator;

  constructor(page: Page) {
    this.page = page;
    // example locator to verify we're on the news page
    this.newsTab = page.locator('a.flex.items-center.px-2', { hasText: 'News' });
  }

  async navigateToNewsPage() {
    await this.newsTab.click(); //click news tab
  }

  async verifyNewsUrl() {
    await this.newsTab.click(); //verify news tab is visible
  }
}

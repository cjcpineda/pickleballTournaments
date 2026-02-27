// tests/world/custom-world.ts
import { World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { PickleballHomePage } from '../pages/pbGeneral-page';
import { NewsPage } from '../pages/news-page';
import { setWorldConstructor } from '@cucumber/cucumber';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  pickleballHomePage!: PickleballHomePage;
  newsPage!: NewsPage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}
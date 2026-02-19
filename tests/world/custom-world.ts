// tests/world/custom-world.ts
import { World, IWorldOptions } from '@cucumber/cucumber';
import { Browser, BrowserContext, Page } from '@playwright/test';
import { PickleballHomePage } from '../pages/pbGeneral-page';
import { setWorldConstructor } from '@cucumber/cucumber';

export class CustomWorld extends World {
  browser!: Browser;
  context!: BrowserContext;
  page!: Page;
  pickleballHomePage!: PickleballHomePage;

  constructor(options: IWorldOptions) {
    super(options);
  }
}
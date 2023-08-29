import config from '../playwright.config';
import { expect, test, type Page } from '@playwright/test';

import fs from 'fs';
import filePathAndName from 'path';
import { parse } from 'csv-parse/sync';

export let oneteamlMainPageUrl =  config.oneteamMainPageUrl;
export const fileExtensionCsv = ".csv";

//** CSV Test data loading related functions */

export function GetTestData(testDataFolder, testDataFile) {
    let testDataFilePath = GetRootDirectory() + "/TestData/" + testDataFolder + "/" + testDataFile + fileExtensionCsv;
    const file = fs.readFileSync(testDataFilePath);
    return parse(file, {
      columns: true,
      skip_empty_lines: true,
    });
  }

  export function GetRootDirectory() {
    const rootDirPath = filePathAndName.resolve('./');
    return rootDirPath;
  }

  //** Testdata csv files folders can be added here */
  export class TestDataFolders {                  
    static OurServices = 'OurServices';
  }


//** Page interaction related functions */ 

export async function OpenPage(page, url) {
    await page.goto(url, { timeout: 45000 });
  }

export async function OpenOneteamMainPage(page) {
    await OpenPage( page, config.oneteamMainPageUrl);
  }

export async function ScrollDown(page, verticalPixels) {
    await page.mouse.wheel(0, verticalPixels);
  }
  
export async function Click(page, locatorId) {
    await page.locator(locatorId).click({ timeout: 10000 });
  }

export async function WaitForPageToLoad(page) {
    await page.waitForLoadState('domcontentloaded');
  }  

 //** Assertions related functions */

  export async function IsElementlWithTextExisting(page, locator, text) {
    await expect(page.locator(locator)).toHaveText(text);
  }


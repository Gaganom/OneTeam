import { test, expect, type Page } from '@playwright/test';
import * as Util from '../Support/Util.js';
import * as POMHelper from '../Support/PomHelper.js';


test('Verify oneteam services are listed correctly', async ({ page }) => {

    const testDataFile = 'VerifyServices';
    let servicePage = await POMHelper.OpenPageServicesPage(page, Util.TestDataFolders.OurServices, testDataFile);
    await servicePage.AssertServicesListedCorrectly();
});



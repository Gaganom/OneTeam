import  * as Util from "../Support/Util.js" ;
import { HomePage } from '../POM/HomePage.js';
import { Page } from "@playwright/test";

export class OurServicesPage
{
    page : Page;

    //** Locators initialized  */

    locSoftEng = '#comp-lg07qk44'
    locCloudArch = '#comp-lg073o9t1';
    locAgileDelivery = '#comp-lg073o9x';
    locArchDesign = '#comp-lg086mt0';
    locDevopServices = '#comp-lg0874tx';
    locConsulting = '#comp-lg073o9q6';

    data;

    constructor(page: Page) {
        this.page = page;
      }

     LoadData(testDataFolder, testDataFile) {
        this.data = Util.GetTestData(testDataFolder, testDataFile);
     }
   
     async LaunchServicesPage(page){
        await HomePage.OpenOurServicesPage(page);
        //await Util.ScrollDown(this.page, 350);
    }


    //** Though Assertions are not recommended in POM object but for better management of assertions using pom object variable it is being implemented here */
    //** Assertion related functions */
  
    async AssertServicesListedCorrectly(){

        await Util.IsElementlWithTextExisting(this.page, this.locSoftEng, this.data[0].locSoftEngText );
        await Util.IsElementlWithTextExisting(this.page, this.locCloudArch, this.data[0].locCloudArchText );
        await Util.IsElementlWithTextExisting(this.page, this.locAgileDelivery, this.data[0].locAgileDeliveryText );
        await Util.IsElementlWithTextExisting(this.page, this.locArchDesign, this.data[0].locArchDesignText );
        await Util.IsElementlWithTextExisting(this.page, this.locDevopServices, this.data[0].locDevopServicesText);
        await Util.IsElementlWithTextExisting(this.page, this.locConsulting, this.data[0].locConsultingText);
   
    }


}



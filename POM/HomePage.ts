import  * as Util from "../Support/Util.js" ;

export class HomePage
{
    //** locators initialized */

    static  locOurServices = '#comp-kpz2sysg2label';
  
    
   static async OpenOurServicesPage(page)
   {
     await this.ClickButtonOurServices(page);
   }

   static async ClickButtonOurServices(page)
   {
       await Util.OpenOneteamMainPage(page);
       await Util.Click( page, this.locOurServices);
       await Util.WaitForPageToLoad(page);
   }

   

}

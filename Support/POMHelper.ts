import * as Util from "./Util.js";

import { HomePage } from '../POM/HomePage.js';
import { OurServicesPage } from '../POM/OurServicesPage.js';


export async function OpenPageServicesPage(page, folder, file) {
    
    let sp = new OurServicesPage(page);
    sp.LoadData( folder, file );
    await sp.LaunchServicesPage(page);
    return sp;
}
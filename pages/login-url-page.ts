import { expect, Page } from "@playwright/test";
import { CommonActionMethodPage } from "./common-action-locators";

export class LoginUrlPage{

    page : Page
    constructor(page:Page){
        this.page = page;
        
    }

    async eFormLoginUrl(){
        await this.page.goto("https://aws.amazon.com/?nc2=h_lg");
    }
    
}

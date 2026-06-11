import {test} from "@playwright/test";

test("To print all apps name of google", async({page})=>{
    await page.goto("https://www.google.com")
    await page.locator('.gb_C',).click();
    const iframe = page.frameLocator('iframe[name="app"]')
    const appNames = await iframe.locator('.Rq5Gcb').allInnerTexts();
    console.log("The google Apps are:")
    for (let index=0;index<appNames.length;index++ ){
        console.log(index+1,".",appNames[index])
    }
})

import { test,chromium,firefox } from "@playwright/test"

test("Red Bus in Edge browser",async()=>{
    const edgeBrowser = await chromium.launch({ 
        channel: "msedge"
    })
    const edgePage = await edgeBrowser.newPage();
    await edgePage.goto("https://www.redbus.in/")
    console.log("The page Title is: ",await edgePage.title())
    console.log("The page URL is: ",edgePage.url())
})

test("Flipkart in Firefox browser", async()=>{
    const firefoxBrowser = await firefox.launch()
    const firefoxPage = await firefoxBrowser.newPage();
    await firefoxPage.goto("https://www.flipkart.com/")
    console.log("The page Title is: ",await firefoxPage.title())
    console.log("The page URL is: ",firefoxPage.url())
})

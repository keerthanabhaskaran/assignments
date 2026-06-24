import test, { expect } from "@playwright/test";

test("Learning window handling",async({page,context})=>{
    //Login to the website
    await page.goto("https://login.salesforce.com/?locale=in")
    await page.locator('#username').fill('dilipkumar.rajendran@testleaf.com') 
    await page.locator('#password').fill('TestLeaf@2025')
    await page.locator('#Login').click()
    //Open the saleforce help which open in new page
    await page.getByRole('button', { name: 'Salesforce Help' }).click()
    const [newPage] = await Promise.all([
        context.waitForEvent('page'),
        page.getByRole('link', { name: 'Salesforce Help' }).click()
    ])
    await newPage.waitForLoadState('domcontentloaded')
    //On the new page, click confirm and get the url and title of newpage
    await newPage.getByRole('button', {name:'Confirm'}).click()
    await newPage.waitForLoadState('networkidle')
    const title = await newPage.title()
    const url = newPage.url()
    //assert the title and url and print them.
    await expect(newPage).toHaveTitle(title)
    await expect(newPage).toHaveURL(url)
    console.log("Title: "+ title)
    console.log("URL: "+ url)
})

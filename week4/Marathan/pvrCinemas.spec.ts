import {test} from "@playwright/test";

test("Book ticket in PVR", async({page})=>{
    page.goto("https://www.pvrcinemas.com/")
    await page.locator('.cities-name',{ hasText:'Chennai'}).click()
    await page.locator('.p-dropdown-label',{hasText:'Select Movie'}).click()
    await page.locator('.p-dropdown-item',{hasText:'BLAST'}).click()
    await page.locator('.p-dropdown-item',{hasText:'12 Jun'}).click()
    await page.locator('.p-dropdown-item',{hasText:'PVR, Grand Mall, Velachery'}).click()
    await page.locator('.p-dropdown-item',{hasText:'01:00 PM'}).click()
    await page.locator('[aria-label="Submit"]').click()
    await page.locator('.sc-kCuUfV.iBvycX.reject-terms', { hasText: "Accept" }).click()
    await page.locator('xpath=//*[@id="PE.PRIME|L:22"]').click()
    await page.getByRole('button', { name: 'Proceed' }).click()
    await page.waitForTimeout(3000)
    const currenturl=await page.url()
    if(currenturl.endsWith("food"))
        console.log("Seat is been selected Successfully")
})

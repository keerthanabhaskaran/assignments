import {test,expect} from "@playwright/test";
test("Buy shooes in decathlon",async({page})=>{
    await page.goto("https://www.decathlon.in/")
    await expect(page).toHaveTitle(/Sportswear/i)  //title contains sportswear
    await page.locator('[data-test-id="search-input-desktop:container"]').click()
    await page.keyboard.press('Enter')
    await expect(page).toHaveURL(/shoes/i, { timeout: 10000 })
    await page.getByRole('button',{ name:'Sport'}).last().click()
    await page.locator('[data-test-id="filter-checkbox-sport_pratice_en-Running"]').click()
    await page.getByRole('button',{ name:'Gender'}).last().click()
    await page.locator('[data-test-id="filter-checkbox-gender_id_en-MEN"]').click()
    await page.getByRole('button',{ name:'Size'}).last().click()
    await page.locator('[data-test-id="filter-checkbox-indian_size-9"]').click()
    await page.locator('[data-test-id="sort-bar-desktop:chevron-down-icon"]').click()
    await page.getByText('Highest discount ').click()
    //I am not aware of drag and drop, the price text box is not editable too
    //await page.locator('#min-price-input').fill("1000")
    //await page.locator('#max-price-input').fill("3000")
    await page.locator('[data-test-id*="product-card"]').first().click()
    await page.locator('[data-test-id="pdp-size-option-button-9.5"]').click()
    await page.locator('[data-test-id="pdp:add-to-cart-button"]').click()
     await page.waitForTimeout(3000) //if this wait is not there, my cart is showing empty
    await page.locator('[data-test-id="header-desktop:cart-icon"]').click()
    await expect(page.locator('[data-test-id="text:cart-product-name"]')).toHaveText("Men Running Shoes Superior Grip Cushioned Upto 20km/week, Jogflow 190.1 - Black")
    await page.waitForTimeout(3000)
})

import test, { expect } from '@playwright/test'
import path, { dirname } from 'path'
import fs from 'fs'

test("Upload the file using upload button",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
    const fileUpload= page.locator('#file-upload')
    //upload the file
    await fileUpload.setInputFiles(path.join(__dirname, 'Data/download.jfif'))
    await page.locator('#file-submit').click()
    //assert the file upload is successfull
    await expect(page.locator('h3')).toHaveText('File Uploaded!')
    console.log("File uploaded sucessfully using upload button")
})
//upload the file without using upload button
test("Upload the file without using upload button",async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/upload')
     // Wait for file chooser and click the drop zone at the same time
    const [selectFile] = await Promise.all([
        page.waitForEvent('filechooser'),
        page.locator('#drag-drop-upload').click()
    ])
    await selectFile.setFiles(path.join(__dirname, 'Data/download.jfif'))
    //assert the file upload is successfull
    await expect(page.locator('.dz-success-mark')).toBeVisible
    console.log("File uploaded sucessfully without upload button")
})
test("Download the file", async({page})=>{
    await page.goto('https://the-internet.herokuapp.com/download')
    //trigger Download the file
    const [download]=await Promise.all([page.waitForEvent('download'),page.click('text=test_image.png')])
    //stored the filepath in variablae
    const filepath = path.join(__dirname,'Data/',download.suggestedFilename())
    //save the downloaded file in data folder
    await download.saveAs(filepath)
    //assert the file download is successfull
    expect(fs.existsSync(filepath)).toBeTruthy()
    console.log("Successfully downloaded and saved in "+filepath)
})

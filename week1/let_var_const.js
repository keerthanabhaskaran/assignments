const browserVersion="Chrome"
function getBrowserVersion(){
    if(browserVersion==="Chrome"){
        let browserVersion="1.1"
        console.log("BrowserVersion inside the block is: ",browserVersion)
    }
    console.log("BrowserVersion inside the function is: ",browserVersion)
}
console.log("BrowserVersion befor calling function is: ",browserVersion)
getBrowserVersion()
console.log("BrowserVersion after calling function is: ",browserVersion)

//function to print browser
function launchBrowser(browsername)
{
    browsername=browsername.toLowerCase()//to handle case senistive
    if(browsername=='chrome')
        console.log("Launching Chrome browser")
    else
        console.log("It is not a chrome browser")
}
//function to print testing type
function runTests(testtype)
{
    testtype=testtype.toLowerCase()//to handle case senistive
    switch(testtype)
    {
        case "sanity":
            console.log("You are doing Sanity testing")
            break;
        case "regression":
            console.log("You are doing Regression testing")
            break;
        default:
            console.log("You are doing Smoke testing")
            break;
    }
}
//call launchbrowser
launchBrowser("Chrome")
launchBrowser("chrome")
launchBrowser("edge")
//call testing type
runTests("regression")
runTests("REGRESSION")
runTests("functional")
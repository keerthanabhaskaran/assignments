//function to reverse
function toreverse(originalstr)
{
    let length=originalstr.length
    let reversestr=""
    for(let j=length-1; j>=0; j--)
    {
        reversestr+=originalstr[j]
    }
    console.log("Original string is", originalstr)
    console.log("Reversed string is", reversestr)
    //call function to comapre
    palindrome(originalstr,reversestr)
}
//function to compare
function palindrome(orgstr, revstr)
{
    //call function to print output
    output (orgstr===revstr)
}
//to print output
function output(ispalin)
{
    if (ispalin)
        console.log("Given string is palindrome")
    else
        console.log("Given string is not palindrome")
}
//to call reverse function
toreverse("keerthana") 
toreverse("Madam") //case Sensitivity
toreverse("level")
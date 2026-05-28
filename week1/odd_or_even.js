//function to ptint the output
function isOddOrEven(number)
{
    let remainder =number%2
    if(remainder==1)
        console.log(number, "is an odd number")
    else
        console.log(number, "is an even number")
}

//call the function
isOddOrEven(28)
isOddOrEven(29)
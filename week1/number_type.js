//function to check number type
function numbertype(num)
{
    let numtype=""
    if(num>0)
        numtype="Positive number"
    else if(num<0)
        numtype="Negative number"
    else
        numtype="Zero"
    return output(num, numtype)
}
//to print output
function output(num, numtype)
{
    console.log(num, "is a ", numtype)
}

numbertype(-1)
numbertype(3)
numbertype(0)
//function to find longest word
function longest(statement)
{
    let splitdstr=statement.split(" ")
    let maxindexlength=0
    let maxlength =0
    let longestword=""
    for (let i=0; i<splitdstr.length; i++)
    {
        let indexlength=splitdstr[i].length 
        //console.log(maxlength, indexlength)
        if (maxlength < indexlength) 
        {
            maxlength = indexlength
            longestword =splitdstr[i] + " "
        }
        else if (maxlength == indexlength) //noted two words in sam elength so added elseif
        {
            longestword +=splitdstr[i]
        }
    }
    console.log("the longest word(s) is "+ longestword)
}
//call the function
longest("Automation testing is incredibly important")
longest("I am Keerthana Senior QA")
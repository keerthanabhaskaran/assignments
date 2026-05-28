function removeduplicates(str)
{
    let uniquestr=""
    let strlen=str.length
    for (let i=0; i<strlen; i++)
    {
        let  isduplicate=false
        for (let j=0; j<i; j++)
        {
            if (str[i]==str[j])
            {
                isduplicate=true
                break;
            }
            //console.log(str[i], str[j], isduplicate)
        }
        if(isduplicate==false)
            uniquestr+=str[i]
    }
    console.log("the unique char is ", uniquestr)
}
removeduplicates("keerthana")
removeduplicates("Mani rathinam")//case M and m are different
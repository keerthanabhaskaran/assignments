function countvowels(str)
{
    let vowelcount=0
    str=str.toLowerCase()
    let strlen=str.length
    for (let i=0; i<strlen; i++)
    {
        switch(str[i])
        {
            case "a":
                vowelcount++
                break;
            case "e":
                vowelcount++
                break;
            case "i":
                vowelcount++
                break;
            case "o":
                vowelcount++
                break;
            case "u":
                vowelcount++
                break;
        }
    }
    console.log("total count of vowels in ", str, " is ", vowelcount)
}
countvowels("aeiou")
countvowels("qwrty")
countvowels("Playwright")
//1.Given a string s consisting of words and spaces, return the length of the last word in the string. 
function lastWorkLength(str){
    let splitStrToArray=str.trim().split(" ")
    let index=splitStrToArray.length-1 //Index of last word
    console.log("The last word in ",str," is \"",splitStrToArray[index],"\" with length",splitStrToArray[index].length)
}
lastWorkLength("Hello World")
lastWorkLength("   fly me   to   the moon  ")
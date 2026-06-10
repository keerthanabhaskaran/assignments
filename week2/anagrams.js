function toCheckAnagrams(str1, str2){
    let string1 = str1.toLowerCase().replaceAll(" ", "").split("").sort().join("");
    let string2 = str2.toLowerCase().replaceAll(" ", "").split("").sort().join("");
    return string1.includes(string2)
}
console.log("isAnagram(listen , silent): ",toCheckAnagrams("listen","silent"))
console.log("isAnagram(Listen , Silent): ",toCheckAnagrams("Listen","Silent"))
console.log("isAnagram(conversation , voices rant on): ",toCheckAnagrams("conversation","voices rant on"))
console.log("isAnagram(hello , world): ",toCheckAnagrams("hello", "world" ))
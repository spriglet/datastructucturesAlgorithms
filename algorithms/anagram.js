/*

Problem: Given two strings, write a function to determine if the second string is an anagram of the first string.
Anagram: An anagram is a word phrase, or name formed by rearranging the letters of another, such as cinema,formed from iceman.
Inputs: the two strings
Output: a true or falst statement denoting if the second string an anagram of the first
Can the outputs be determined by the inputs: Yes
How to name the important piece of data: str1, str2, freqObj1 key: count, freqObj2({key :ount})

test cases:
'aaz, 'zza'
'anagram', 'nagaram'
'rat', 'car'
'awesome', 'awesom'
'querty', 'qeywrt'
'texttwisttime', 'timetwisttext'

*/

const frequencyOfCharaters = (str) => {
    /*
        Takes a string and returns an object of the frequency of characters in that str
    */
    // declare my object
    let freqObj = {}
    // loop through string and create object
    for(char of str){
        // if the key exist in object add 1 to it. If it doesn't exist create it and set its value to one
        freqObj[char] = ++freqObj[char] || 1
    }
    return freqObj
}

function isValidAnagram(str1, str2){
    // If strings are not the same length return false
    if(str1.length !== str2.length){
        return false
    }
    // declare ferquency objects
    const freqObj1 = frequencyOfCharaters(str1)  // count the frequency of letters in first string 
    const freqObj2 = frequencyOfCharaters(str2)　// count the ｆrequency of letters in second str
    // look through and check of equality of all characters in both objects
    for(char in freqObj1){
        // compare character in object1 and two and if they are not equal return false
        if(freqObj1[char] !==freqObj2[char])
            return false
    }
    return true
}
console.log(isValidAnagram('', ''))
console.log(isValidAnagram('aaz', 'zza'))
console.log(isValidAnagram('anagram', 'nagaram'))
console.log(isValidAnagram('rat', 'car'))
console.log(isValidAnagram('awesome', 'awesom'))
console.log(isValidAnagram('qwerty', 'qeywrt'))
console.log(isValidAnagram('texttwisttime', 'timetwisttext'))
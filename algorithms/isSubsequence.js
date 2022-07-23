
// Write a function that takes two strings and return true if those characters are found starting from left to right in consectuive order second string.
/*
Inputs: two strings
Ouputs: true or false
names of variables: checkIndex, str1Char
*/


function isSubsequence(str1, str2) {
    // declare check index
    let checkIndex = 0
    // for loop through str2
    for(const char of str2){
      //getstr1Char using check index
      const str1Char = str1[checkIndex]
      // if character str1Char is equal str2 char increment check index
      if(str1Char === char){
        checkIndex++
      }
      // if checkIndex is equal to the length of str1 return true
      if(checkIndex === str1.length){
        return true
      }
    }
    return false
}


console.log('true', isSubsequence('hello', 'hello world'))
console.log('true', isSubsequence('sing', 'sting'))
console.log('true', isSubsequence('abc', 'abracadabra'))
console.log('false', isSubsequence('abc', 'cfffbffa'))
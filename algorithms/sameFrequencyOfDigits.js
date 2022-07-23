/*

Write a function that takes two numbers and returns true if both numbers have the same freqency of digits
Inputs: 2 numbers
outputs: True if both numbers have the same frequency of digits
Important Variables: num1 num2, frequencyObj
*/

function sameFrequency(num1, num2){
    // convert numbers to strings
    const str1 = num1.toString()
    const str2 = num2.toString()
    // if the the string values are of unequal lengths return false
    if(str1.length !== str2.length){
        return false
    }
    // declare ferquency object for str1
    let freqObj1 = {}
    // loop through str1 and build frequencyCounter object
    for(const digit of str1){
        //if number exist in frequency object increment by one else create value and set to 1
        freqObj1[digit] = ++freqObj1[digit] || 1
    }
    // loop through str2
    for(const digit of str2){
       // if digit is 0 or doesn't exist return false
       if(!freqObj1[digit]){
        return false
       }
       freqObj1[digit]--
    }
    // return true because all test have been passed
    return true
}




console.log('Should be true', sameFrequency(181,811))
console.log('Should be false', sameFrequency(19,811))
console.log('Should be false', sameFrequency(911,811))
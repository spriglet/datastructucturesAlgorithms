
/*
write a function that that returns the length of longest substring in a string with unique characters
Input: str
Output: length of longest substring with unique characters
Name of important variabels: str, start, end, frequencyObj, longestLength

*/



function findLongestSubstringOld(str){
    // if str length is 0 or 1 return str length
    if(str.length < 2 ) return str.length;
    // declare and set start and end to 0
    let start = 0; let end = 0;
    // declare frequency object
    let freqObject = {};
    // declare and set longest string to 0
    let longestString = 0;
    // loop while end less than string length
    while(end < str.length){
        // if character exist in object
        const char = str[end]
        let substrLength = end - start + 1 // 1
        if(freqObject[char] >=0 && freqObject[char] < start){
            delete freqObject[char]
        }
        if(freqObject[char] >= 0){
            // set frequency objet to {}, set start end 
            start = freqObject[char] + 1
            delete freqObject[char]
            substrLength--
        }
        freqObject[char] = end
        // if str length greater than longest string length then set longestLength to string length
        if(substrLength > longestString){
            longestString = substrLength
        }
        // add characer to frequencyObject and increment end by 1
        end++
        
    }
       
    return longestString
}

function findLongestSubstring(str) {
    let longest = 0;
    let seen = {};
    let start = 0;
   
    for (let i = 0; i < str.length; i++) {
      let char = str[i];
      if (seen[char]) {
        start = Math.max(start, seen[char]);
      }
      // index - beginning of substring + 1 (to include current in count)
      longest = Math.max(longest, i - start + 1);
      // store the index of the next char so as to not double count
      seen[char] = i + 1;
    }
    return longest;
  }
console.log('6', findLongestSubstring('thisishowwedoit'))
console.log('0:', findLongestSubstring(''))
console.log('7', findLongestSubstring('rithmschool'))
console.log('6', findLongestSubstring('thisisawesome'))
console.log('7', findLongestSubstring('thecatinthehat'))
console.log('1', findLongestSubstring('bbbbbb'))
console.log('8', findLongestSubstring('lognestsubstring'))
console.log('6', findLongestSubstring('thisishowwedoit'))
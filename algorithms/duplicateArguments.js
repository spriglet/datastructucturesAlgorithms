
/*
Write a function that returns true if there are duplicate arguments and false if there are not
Inputs: function arguments 
Outputs: true or false
Names Data: arguments, freqObj
*/

function areThereDuplicatesFrequencyCounters() {
   // good luck. (supply any arguments you deem necessary.)
   // declare freq array
   let freqObject = {}
   // loop through arguments
   for(let i = 0; i<arguments.length;i++){
    if(freqObject[arguments[i]])
        return true
     freqObject[arguments[i]] = 1
   }
   // return false because no duplicates were found
   return false
}

function areThereDuplicates() {
   // good luck. (supply any arguments you deem necessary.)
   // if array less than 2 return false
   // sort array
  const arr = Object.values(arguments)
  arr.sort()
   // declare pointers
   for(let i =0;i<arr.length -1;i++){
      if(arr[i] === arr[i+1]){
         return true
      }
   }

   return false
}

console.log('Should be false', areThereDuplicates(1,2,3, undefined, '', null))
console.log('Should be true', areThereDuplicates(1,2,2))
console.log('Should be true', areThereDuplicates('a','b','c','a'))
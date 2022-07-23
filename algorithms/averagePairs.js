/*
write a function that takes an array of integers and average and returns true if there is a pair of integers whose average is euqal to that average
inputs: array of integers, average
output: true or false 
Names: arr, average, left pointer right pointer
*/


function averagePair(arr, average){
   // declare left pointer and right pointer
   let left = 0; let right = arr.length -1
   // loop while left is less than rigth
   while(left < right){
    const pairAvg = (arr[left] + arr[right]) / 2
    // if average of pairs is equal to pairs return true
     if(pairAvg === average) return true
     if(pairAvg < average){ // if the average is too high decrement the right pointer
        left++
     }else{  // else increment left pointer
        right--
     }
    
   }
    // return false
    return false
}


console.log('Should equal true', averagePair([1,2,3], 2.5)) 
console.log('Should equal true', averagePair([1,3,3,5,6,7,10,12,19], 8))
console.log('Should equal false', averagePair([-1,0,3,4,5,6], 4.1))
console.log('Should equal false', averagePair([], 4))
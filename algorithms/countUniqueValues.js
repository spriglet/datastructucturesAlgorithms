function countUniqueValues(arr){
    // add whatever parameters you deem necessary - good luck!
    // leftPointer and right poiner
    if(!arr.length)
      return 0
    let left = 0; let right = 1; let uniqueValues = 0;
    // while loop that continues looping while pointer is less than length of the array
    while(right <= arr.length){
      // if current value is not equal to last value add 1 to uniqueValues and set lastValue to currentValue
      const a = arr[left]
      const b = arr[right]
      if(a!==b){
         uniqueValues++
         left = right
      }
      //increment pointer
      right++
    }
    return uniqueValues
  }

 // console.log(countUniqueValues([1,1,1,1,1,2,2]))


 function countUniqueValues1(arr){
    let i = 0
    for(let j = 1;j<=arr.length;j++){
        if(arr[i]!==arr[j]){
            i++
            arr[i] = arr[j]
        }
    }
    return i
  }

console.log(countUniqueValues1([]))
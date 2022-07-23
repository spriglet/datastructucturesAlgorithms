
/*
  Write a function that takes in a arr of positive integers and a number. Return the length of a sub array from the arr which is the smallest length of a sub array where 
  the sum of the subarrays numbers are equal to or greater than the number.
  Inputs: array and number
  Ouputs: length of smallest sub array whose sum is equal to or greater than the number
  Names of important variables: arr, num (parameers),  start end index (of sub array), smallestLength, sum
*/
function minSubArrayLength(arr, num){
  // if arr length is 0 return 0
  if(arr.length === 0) return 0
  // declare start and end index set both to 0
  let start = 0; let end = 0
  // declare sum and set it to the first element in the array
  let sum = arr[0]
  // declare smallest length set to Infinity
  let smallestLength = Infinity
  //loop while end is not the last index and subarr sum is not less than num and start is less than array length
  while(end < arr.length && start < arr.length){
    // if the sum is equal to or greater than num and length of subarr is smaller set smallesLength to length
    if(sum >= num && end - start + 1 < smallestLength){
      // if smallestLength 1 return 1
      if(smallestLength === 1)
        return 1
      smallestLength = end - start + 1
    }
    // if the sum is greater than or equal to num subtract starts value from sum and increment start
    if(sum >= num){
      sum = sum - arr[start]
      start++
    }else{ // else increment end and add ends value to sum
      sum = sum + arr[end + 1]
      end++
    }
    // if length is greater or equal to smallestLength substract starts value  from he sum and increment its start index by 1
    if(end - start + 1 > smallestLength){
      sum = sum - arr[start] 
      start++
    }
  }
  // if smallest length is equal to infinity return 0 else return smallest length
  return smallestLength === Infinity ? 0 : smallestLength
}

console.log(minSubArrayLength([2,3,1,2,4,3],7)) //2
console.log(minSubArrayLength([2,1,6,5,4],9)) // 2
console.log(minSubArrayLength([3,1,7,11,2,9,8,21,62,33,19],52)) //1
console.log(minSubArrayLength([1,4,16,22,5,7,8,9,10],39)) //3
console.log(minSubArrayLength([1,4,16,22,5,7,8,9,10],55)) // 5
console.log(minSubArrayLength([4,3,3,8,1,2,3], 11)) // 2
console.log(minSubArrayLength([1,3,16,22,5,7,8,9,10], 95)) //0
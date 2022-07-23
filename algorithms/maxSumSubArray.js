
/*
    Given an array of integers and length of a sub array find the highest max sum of consecutuve integers within the array
    Inputs: arr, length of the sub array
    Ouput: the subarray with the higest maximum sub
    Names of important data: arr, subLength (length of sub array), max, currentValue
*/

function maxSubarraySum(arr, subLength){
    // declare max as negative infiity
    let max = 0
    // if sublength greater than arr return max
    if(!arr.length || arr.length < subLength) return null
    // declare current value
    // loop trhough first n elements of the array and set max and current value to the sum of them and set max to it.
    for(let i = 0;i<subLength; i++){
        max += arr[i]
    }
    let currentValue = max
    // loop through setting i to 1 and loop until i is less than arr length minus sub length
    for(let i = 1;i<=arr.length - subLength;i++){
       // subtract the first element of the previous sub array and add the last element of new subarray to the prev value
       currentValue = currentValue + arr[i+subLength -1] - arr[i-1]
       // if current value greater than max then set max to current value
       if(currentValue > max){
         max = currentValue
       }
    }
    return max
}



console.log('700:', maxSubarraySum([100,200,300,400], 2))
console.log('39:', maxSubarraySum([1,4,2,10,23,3,1,0,20], 4))
console.log('5:' , maxSubarraySum([-3,4,0,-2,6,-1],2 ))
console.log('null:', maxSubarraySum([],3 ))
console.log('5:', maxSubarraySum([1,2,5,4],1))
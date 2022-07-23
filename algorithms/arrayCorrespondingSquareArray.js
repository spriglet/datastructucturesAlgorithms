
/*
Frequency Counters

Problem: Write a function called same, which accepts two arrays.  The function should return true if every value in the array has its corresponding value squared
in the second array. The frequency values must be the same. 

In my own words: Compare 2 arrays that are the parameters of the same function. If every value of the first array his its value squared in the second array return true. 
If it doesn't return false. 

Inputs: The first and second array
Ouputs: True or false 
Names of important data: Same  the function, arr1 and arr2. freqObject 2:{arr1:2, arr2: 3}
*/

/*
[1,2,3], [4,1,9]
[1,2,3], [1,9]
[1,2,1], [4,4,1]
*/
function same(arr1, arr2){
    // Check to make that the lengths of arr1 and arr2 are equal
    if(arr1.length !== arr2.length) return false
    // create my object 
    const freqObject = {}
    //loop over the first array
    for(num of arr1){
         //if this value exist in the object add 1
        if(freqObject[num]){
            freqObject[num].arr1++
        }else{ // if it does not then set that value arr1 to 1 and arr2: 0
            freqObject[num] = {arr1:1, arr2:0}
        }
    }
    //loop over the second array
    for(num of arr2){  
        const numRoot= Math.sqrt(num)
        // if the squqre root of this value exist in then add 1 to it
        if(freqObject[numRoot]){
            freqObject[numRoot].arr2++
        }
        else{
            return false
        }
    }
    for(obj of freqObject){
        const {arr1, arr2} = obj
        if(arr1 !== arr2){
            return false
        }
    }
    return true
}
console.log('Same:', same([1,2,3], [4,1,9]))
console.log('Same:', same([1,2,3], [1,9]))
console.log('Same:', same([1,2,1], [4,4,1]))
console.log('Same:', same([1,2,3,2], [9,1,4,4]))
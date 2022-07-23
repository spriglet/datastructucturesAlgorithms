
/*

 Implementation of binary search
 Inputs: arr (must be sorted array of numbers) , value to search
 Output; The index of the element if found or -1 if not found
 Important Pieces of data: left (left pointer), right (right pointer), middle pointer

 */


function binarySearch(arr, val){
	// declare and set right to length of the array - 1 and left to 0
	let right = arr.length - 1; let left = 0
	// loop while right is greater than or equal to let
	while(right >= left){
		// get middle index between left and right
		const middle = Math.ceil((right + left) / 2)
		// if middle is equal to value return index
		const midVal = arr[middle]
		if(arr[middle] === val) return middle
		if(val > midVal){ // if the middle is less than the value set right  to middle plus one
			left = middle + 1
		}else{ // else set left to middle minus 1
			right  = middle - 1
		}
	}
	return -1
}
const arr = [1,3,4,8,10,22,44,55,100]
for(const val of arr){
	console.log(binarySearch([1,3,4,8,10,22,44,55,100], val))
}


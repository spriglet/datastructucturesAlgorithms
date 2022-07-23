

/*
Find the number of elements less than array element at the start of the array. Then place the element at the index equal to the number of elements less than it.
Input: arr,  pivot, end
Output: new index of the start element
Important names of data: pivotValue , pivotPlaceHolder

 */

function swap(arr,id1, id2){
	[arr[id1],  arr[id2]] = [arr[id2],  arr[id1]]
}
const pivotHelper = (arr, start = 0, end = arr.length) => {
	let pivotPlaceHolder = start // declare pivotPlace Holder using the index and value of pivot point
	for(let i = start + 1; i < end; i++){ // for loop starting with the index of one plus start until end
		if(arr[start] > arr[i]){ // compare first two element and if it is less than pivot's value
			++pivotPlaceHolder // increment pivotPlaceHolder
			swap(arr,pivotPlaceHolder, i)	// swap pivot placeHolder value with lesser value
		}
	}
	swap(arr,start, pivotPlaceHolder)// swap start with pivotPlaceHolder

	return pivotPlaceHolder
}

const quickSort = (arr, start = 0, end = arr.length) => {
	if(end - start > 1){
		const pivotPoint =	pivotHelper(arr, start, end)
		quickSort(arr,start, pivotPoint)
		quickSort(arr, pivotPoint + 1, end)
	}
  return arr
}
const arr = Array.apply(null, {length: 100000}).map(Function.call, Math.random)
console.log(quickSort([4,6,9,1,2,5]))

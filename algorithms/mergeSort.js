
/*
Input: 2 array
Output: The two arrays merged and sorted in one array
Important variables: arr1 arr2 , mergedArr, index1 index2 (arr1 index and array 2 index

 */

function mergeSortedArrays(arr1, arr2){
	// declare mergeArr and index1 and index 2 and set indexes to 0
	let mergeArr = []; let index1 = 0; let index2 = 0;
	// loop while index1 <  arr1 or index2 < arr2
	let count = 0;
	while(index1 < arr1.length || index2 < arr2.length){
		if(arr1.length === index1 || arr1[index1] > arr2[index2]){ // if arr1.length === index1 || index1 elem greater than index2 element
			// insert index2 element in mergeArr and increment increment index2
			mergeArr.push(arr2[index2])
			++index2
		}else{ // else increment index1 and put index1 element in the array
			mergeArr.push(arr1[index1])
			++index1
		}
	}
	return mergeArr
}
export const mergeSort = (arr) =>{
	if (arr.length  < 2) return arr.length === 1 ? arr : []
	const mid = Math.floor(arr.length / 2)
	const arr1 = mergeSort(arr.slice(0,mid))
	const arr2 = mergeSort(arr.slice(mid))
	return mergeSortedArrays(arr1, arr2)
}

function createRandomArray(numElements){
	let arr = []
	for(let i = 0;i<numElements;i++){
		arr.push(Math.floor(Math.random() * (numElements * 2) ))
	}
	return arr
}

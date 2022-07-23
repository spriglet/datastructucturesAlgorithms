

function swap(arr,id1, id2){
	[arr[id1],  arr[id2]] = [arr[id2],  arr[id1]]
}
function selectionSort(arr){
	for(let i = 0;i< arr.length;i++){ 	// loop through array
		let minIndex = i; let noSwap = true 	//declare min as index of outer loop  and declare noSwap set to false
		for(let j = i + 1;j<arr.length;j++){ // loop through array starting with the index + 1 of the other array
			if(arr[j] < arr[minIndex]){ 	//if the inner loop key value is less than the min reset minimum to new key
				noSwap = false // set noSwap to false
				minIndex = j
			}
		}
		if(noSwap) break;
		swap(arr,i, minIndex)
	}
	return arr
}
function insertionSort(arr){
	// for loop till i is less than or equal array length
	for(let i = 1; i<arr.length ;i++){ // get index after i or next// loop backwards till j is 0 set j is equal to i
	  const currentVal = arr[i]
		for(var j = i - 1;j >= 0 && arr[j] > currentVal;j--){ // if// j value is less than test case
			arr[j+1] = arr[j]
		}
		arr[j + 1] = currentVal
	}
	return arr
}
function bubbleSort(arr){
	for(const i in arr){
		let noSwap = true
		for(let j = 0;j < (arr.length - i -1);j++){
			if(arr[j] > arr[j+1]) {
				swap(arr,j, j +1 )
				noSwap = false
			}
		}
		if(noSwap) break;
	}
	return arr
}
const arr = Array.apply(null, {length: 100000}).map(Function.call, Math.random)

console.log(bubbleSort(arr))
//console.log(selectionSort([...arr]))
//console.log(insertionSort([...arr]))
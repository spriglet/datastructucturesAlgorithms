


function flatten(arr){
	if(arr.length <= 0) return []
	const val = arr.pop()
	return  [...flatten(arr),...Array.isArray(val) ? flatten(val)  : [val]]
}

console.log(flatten([1, 2, 3, [4, 5] ]) ) // [1, 2, 3, 4, 5]
console.log(flatten([1, [2, [3, 4], [[5]]]])) // [1, 2, 3, 4, 5]
console.log(flatten([[1],[2],[3]])) // [1,2,3]
console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]])) // [1,2,3
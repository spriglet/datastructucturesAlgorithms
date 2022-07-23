const collectOddValues = (arr) => {
	if(arr.length === 0) return []
	const value = arr.pop()
	return  [ ...collectOddValues(arr), ...(value % 2 === 1) ? [value] : []]
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9,10]))
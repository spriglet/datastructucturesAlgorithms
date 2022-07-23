const getDigit = (num, i ) => Math.floor(Math.abs(num) / Math.pow(10, i)) % 10
const digitCount  = (num) => (num === 0 ? 1 : Math.floor(Math.log10(Math.abs(num))) + 1)

const mostDigits = (arr) => {
	let maxDigitCount = 0
	for(const num of arr){
		const digits = digitCount(num)
		if(digits > maxDigitCount) maxDigitCount = digits
	}
	return maxDigitCount
}

const radixSort = (arr) => {
	// find the max digit
	const maxDigits = mostDigits(arr)
	// loop  i = 0 till less than max digits to find the number of times to loop
	for(let i = 0; i<maxDigits;i++){
		// create bucket array from one to 10
		const bucketArray = Array.from(Array(10).keys()).map(() => [])
		// loop through array
		for(let j = 0;j<arr.length;j++){
			// find the corresponding digit of our first number in the array to i and put it in the correct bucket
			const digit = getDigit(arr[j], i)
			bucketArray[digit].push(arr[j])
		}
		// flatten our bucket array into one array
		arr = [].concat(...bucketArray)
	}
	return arr
}
console.log(radixSort([234,45,123214,13,123,423,53,123]))
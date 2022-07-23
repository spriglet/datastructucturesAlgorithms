/*

Input: string, sub-string
Output; the number of times sub string is found in the string
Name of important data: str, substr
 */

const naiveStringSearch = (str, substr) => {
	let strMatch = 0
	for(let i = 0;i<str.length - substr.length +1;i++){
		for(let j = 0;j<substr.length;j++){
			if(str[i + j] !== substr[j]) break
			if(j === substr.length -1) strMatch++
		}
	}
	return strMatch
}

console.log(naiveStringSearch('loorie loled', 'omg'))
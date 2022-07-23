function stringifyNumbers(obj) {
	// add whatever parameters you deem necessary - good luck!
	const newObject = {}
	let keys = Object.keys(obj)
	// loop through object using object keys
	for(const key of keys){
		//get value
		const val = obj[key]
		if(typeof val === 'object' && !Array.isArray(val)){
			// return
			newObject[key] = stringifyNumbers(obj[key])
		}else{ 	//else go here
			// if value is a number convert it to a string
			newObject[key]  = typeof obj[key] === 'number' ? obj[key].toString() : obj[key]
		}
	}
	return newObject
}
let obj = {
	num: 1,
	test: [],
	data: {
		val: 4,
		info: {
			isRight: true,
			random: 66
		}
	}
}

console.log(stringifyNumbers(obj))
console.log(obj)
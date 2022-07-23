/*
 Find the sum off all even number in an object
 Inputs: object
 Output: sum of all even numbers in object
 Name of Important variables:

 */


function nestedEvenSum (obj) {
	// add whatever parameters you deem necessary - good luck!
	// declare sum
	let sum = 0
	let values = Object.values(obj)
	// loop through object using object values
	for(const val of values){
		//if value equals to obj then call nestedEvenSum
		if(typeof val === 'object'){
			// return
			sum += nestedEvenSum(val)
		}else{ 	//else go here
			// if value is even add it to the sum
			if(typeof val === 'number' && val % 2 === 0){
				sum += val
			}
		}
	}
	return sum
}


var obj1 = {
	outer: 2,
	obj: {
		inner: 2,
		otherObj: {
			superInner: 2,
			notANumber: true,
			alsoNotANumber: "yup"
		}
	}
}

var obj2 = {
	a: 2,
	b: {b: 2, bb: {b: 3, bb: {b: 2}}},
	c: {c: {c: 2}, cc: 'ball', ccc: 5},
	d: 1,
	e: {e: {e: 2}, ee: 'car'}
};

console.log(nestedEvenSum(obj1)); // 6
console.log(nestedEvenSum(obj2)); // 10
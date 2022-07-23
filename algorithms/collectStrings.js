
const collectStrings = (obj) =>{
	// get object values
	const values = Object.values(obj)
	// declare empty array
	let arr = []
	// loop through object values
	for(const val of values){
		// if string put in array
		if(typeof val === 'object'){ 		// if object call collect string
			arr = [...arr,...collectStrings(val)]
		}else{
			if(typeof val === 'string'){  // if string push to array
				arr.push(val)
			}
		}

	}
  return arr
}

const obj = {
	stuff: "foo",
	data: {
		val: {
			thing: {
				info: "bar",
				moreInfo: {
					evenMoreInfo: {
						weMadeIt: "baz"
					}
				}
			}
		}
	}
}

console.log(collectStrings(obj)) // ["foo", "bar", "baz"])
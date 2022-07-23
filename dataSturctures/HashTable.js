

export class HashTable{
	constructor(size=53) {
		this.keyMap = new Array(size)
	}
	_hash(key){
		/* Takes a key and returns a hashed value of that key
			Input: Key
			output: hashed value
	 */
		let total = 0
		for(let i = 0;i<100 && i<key.length;i++) {
			const modifier = key[i].charCodeAt(0) - 96
			if (i % 2 === 0) total += modifier * i
			else total += modifier + i
		}
		return total % this.keyMap.length
	}
	get(key){
		/*
			Accepts a key and hashes the key and uses the hash key to retrieve the value from the keyMap array
			Input: key
		 */
		// get hash key
		const hashKey = this._hash(key)
		// get the array
		const hashedKeyValuePairs = this.keyMap[hashKey]
		if(!hashedKeyValuePairs) return undefined
		// loop until you find the the value you are looking for and return it
		for(let keyValuePair of hashedKeyValuePairs) if(key === keyValuePair[0]) return keyValuePair[1];
		return undefined
	}
	getAll(callback){
		for(const arr of this.keyMap){
			if(arr){
				for(const [key, value] of arr){
					callback(key, value)
				}
			}
		}
	}
	keys(){
		let keys = []
		this.getAll((key) => {
			keys.push(key)
		})
		return keys
	}
	values(){
		let values = []
		this.getAll((key, value) => {
			values.push(value)
		})
		return values
	}
	set(key,value){
		/*
			Takes a key value pair. Hashes it and then stores it in the key map at he hasp position in an array
			Input: Key value pair
			output: None
		 */
		const hashKey = this._hash(key)
		// IF there is not a array at the hash key position in key map then create an array at that position
		if(!Array.isArray(this.keyMap[hashKey])) this.keyMap[hashKey] = []
		// push key value pair at the correct position in key map
		if(!this.get(key)) this.keyMap[hashKey].push([key,value])
		else return 'key exist'
	}
}


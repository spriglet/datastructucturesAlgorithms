export class MaxBinaryHeap {
	constructor(){
		this.values = []
	}
	getParentIndex = (n) =>  Math.floor((n - 1) / 2)
	insert(value){
		/*
			Takes a value and inserts it at the end of the array.
			Using the inserted elements index we find the parent element using the formula ( (n -1) / 2) and compare the values.
			If our inserted element is larger we swap them.
			We continue this process until our inserted element is at position 0 of the array or the the element comparison element is larger than the inserted one.
			Inputs: value (the inserted value)
			Outputs: values array
			Can the output be determined by the inputs? : Yes
			Label Important data; childIndex( Inserted values current index), parentIndex ( The index of the parent we are comparing)
		*/

		this.values.push(value) 	// insert the value into the array
		let childIndex = this.values.length - 1 // find inserted values index
		// loop while index is not 0 and parent index is less than child index
		let parentIndex = this.getParentIndex(childIndex)
		while(childIndex > 0 && value > this.values[parentIndex]){
			// swap child index with parent index and update child index to parent index
			[this.values[parentIndex],this.values[childIndex]] = [this.values[childIndex],this.values[parentIndex]]
			childIndex = parentIndex
			parentIndex = this.getParentIndex(childIndex)
		}
		return this.values
	}
	getChildIndices(index){
		const modifier = index * 2
		return {
			left: modifier + 1 >= this.values.length ? undefined : modifier + 1,
			right: modifier + 2 >= this.values.length ? undefined : modifier + 2,
		}
	}
	bubbleDown(index){
		/* Checks the index node and compares it to its largest children and swaps it if its larger.
		  Repeats this process until there are no children to compare to or it larger than its children
		  Inputs: index
		  outputs: none
		  Important pieces of data: childrenIndices, maxChildValue
		*/
		// loop until index value left and right out of bounds
		// or index value is greater than left and right child nodes
		while(true){
			// get child indices
			const {right, left} = this.getChildIndices(index)
			// find max child value and get its indices
			const childIndex = this.values[left] >= this.values[right] ? left : right
			// if  child index is undefined or child value is less than parent break the loop
			if(!childIndex || (this.values[index] > this.values[childIndex])) break;
			// swap child index with parent and set index o child index=
			[this.values[index], this.values[childIndex]]  =  [this.values[childIndex], this.values[index]]
			index = childIndex
		}
	}
	extractMax(){
		/*
		  Extracts the top or max element from the top of our max heap
	  */
		if(this.values.length){
			const endIndex = this.values.length -1
			if(endIndex) [this.values[0], this.values[endIndex]]  = [this.values[endIndex], this.values[0]]
			const max = this.values.pop()
			this.bubbleDown(0)
			return max
		} else return undefined
	}
}
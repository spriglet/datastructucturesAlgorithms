class Node{
	constructor(data,  priority) {
		this.data = data
	  this.priority = priority
	}
}

export class PriorityQueue {
	constructor() {
		this.values = []
	}
	getChildIndices(index){
		const modifier = index * 2
		return {
			left: modifier + 1 >= this.values.length ? undefined : modifier + 1,
			right: modifier + 2 >= this.values.length ? undefined : modifier + 2,
		}
	}
	getParentIndex = (n) =>  Math.floor((n - 1) / 2)
	enqueue(data, priority){
		/* Inserts the highest (lowest value) priority item in the heap and puts it in its proper place
			Inputs: data, priority
			output: queue
			Label important pieces of data: parentIndex , newNodeIndex (the new item that's inserted into the queue)
		*/
		// get new node index using length of the array values
		let index = this.values.length
		const newNode = new Node(data, priority) // create new node
		// push node into array
		this.values.push(newNode)
		// get parent Index
		let parentIndex = this.getParentIndex(index)
		// loop while parent priority is greater than new Node or new node index is not 0
		while(index > 0 && this.values[parentIndex].priority > newNode.priority){
			// swap parent with with new node
			[this.values[parentIndex], this.values[index]] = [this.values[index], this.values[parentIndex]]
			// update newNodes index to parent
			index = parentIndex
			// get new parent index
			parentIndex = this.getParentIndex(index)
		}
		return this.values
	}
	findHighestPriority(aIndex, bIndex){
	}
	sinkDown(index){
		// loop while true
		while(true){
			// get left and right child indices
			const {left, right} = this.getChildIndices(index)
			// get highest priority child indices
			const childIndex = this.values[left]?.priority < this.values[right]?.priority || this.values[right] === undefined? left: right
			// compare the priorities of the child and parent and if child has lower priority break or if child undefined
			if(childIndex === undefined || this.values[left]?.priority > this.values[index]) break
			// swap highest child with parent
			[this.values[childIndex], this.values[index]] = [this.values[index], this.values[childIndex]]
			// update the index to be the child index
			index = childIndex
		}

	}
	dequeue(){
		if(this.values.length === 0 ) return undefined
		if(this.values.length === 1) return this.values.pop()
		const end = this.values.length - 1;
		[this.values[end], this.values[0]] = [this.values[0], this.values[end]]
		const poppedValue = this.values.pop()
		this.sinkDown(0)
		return poppedValue
	}
}
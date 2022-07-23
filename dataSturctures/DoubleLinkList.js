class Node{
	constructor(val){
		this.next = null
		this.prev = null
		this.val = val
	}
}

export class DoubleLinkList {
	constructor(){
		this.setHeadTail(null)
		this.length = 0
	}
	setHeadTail(val){
		this.head = val
		this.tail = val
	}
	reverse(){
		/* Should puth the link list in reverse order
		   Inputs: none
		   Outputs: link list
		   Name of Impoortand data

		 */
		// return list if length < 2
		if(this.length < 2) return this

		// set middle to head
		let middle = this.head
		// set head to tail and tail to middle
		this.head = this.tail
		this.tail = middle
		// loop till end of length list
		while(middle){
			// set after equal to middle -> next
			let after = middle.next
			// set before to middle next
			let before = middle.prev
			// set middle prev to after and middle next to before
			middle.prev = after
			middle.next = before
			// set middle to after
			middle = after
		}
		return this

	}
	insert(index,val){
		if(index > this.length + 1 || index < 0) return false;
		if(index === this.length) return !!this.push(val)
		if(index === 0) return !!this.unshift(val)
		let newNode = new Node(val)
		let pointer = this.get(index)
		pointer.prev.next = newNode
		newNode.prev = pointer.prev
		newNode.next  = pointer
		pointer.prev = newNode
		this.length++
		return true;
	}
	remove(index){
		if(index > this.length + 1 || index < 0) return false;
		if(index === this.length - 1) return this.pop()
		if(index === 0) return this.shift()
		let removedNode = this.get(index)
		removedNode.prev.next = removedNode.next
		removedNode.next.prev = removedNode.prev
		removedNode.prev = null
		removedNode.next = null
		this.length--
		return removedNode
	}
	shift(){
		if(this.length === 0) return undefined
		let shiftedNode = this.head
		if(this.length === 1)this.setHeadTail(null)
		else{
			this.head = shiftedNode.next
			this.head.prev = null
			shiftedNode.next = null
		}
		--this.length
		return shiftedNode
	}
	get(index){
		if(index >= this.length || index < 0) return null;
		const startWithTail = index >= (this.length / 2)
		const pointerKey = startWithTail ? 'prev' : 'next';
		let counter = index >= (this.length / 2) ? this.length - 1 : 0
		let pointer =  index >= (this.length / 2) ? this.tail :  this.head
		while(index !== counter){
			counter += startWithTail ? -1 : 1
			pointer = pointer[pointerKey]
		}
		return pointer
	}
	set(index, val){
		let pointer = this.get(index)
		if(pointer){
			pointer.val = val
			return true
		}
		return false
	}
	unshift(val){
		if(this.length === 0) this.setHeadTail(new Node(val))
		else{
			let newNode = new Node(val)
			newNode.next = this.head
			this.head.prev = newNode
			this.head = newNode
		}
		++this.length
		return this
	}
	push(val){
		// declare the new node set it
		let newNode = new Node(val)
		if(this.length === 0) this.setHeadTail(newNode)
		else { // else  tail next is pointing to new node and new node prev is pointing to tail
			this.tail.next = newNode
			newNode.prev = this.tail
			this.tail = newNode 	// set tail pointing to newNode
		}
		this.length++ 		// increment length by one
		return this
	}
	pop(){
		if(this.length === 0 ) return undefined
		let poppedNode = this.tail
		if(this.length === 1 )this.setHeadTail(null)
		else{
			this.tail = this.tail.prev
			this.tail.next = null
		}
		--this.length
		poppedNode.prev = null
		return poppedNode

	}
}
class Node{
	constructor(val){
		this.next = null
		this.val = val
	}
}

export class SinglyLinkList{
	constructor() {
		this.head = null
		this.tail = null
		this.length = 0
	}
	push(val){
		let newNode = new Node(val)
		if(!this.head){
			this.head = newNode
			this.tail = this.head
		}else{
			this.tail.next = newNode
			this.tail = this.tail.next
		}
		this.length++
		return this
	}
	printList(){
		let pointer = this.head
		while(pointer.next){
			console.log(pointer.val)
			pointer = pointer.next
		}
		console.log(pointer.val)
	}
	unshift(val){
		const node = new Node(val)
		if(!this.head) this.tail = node
		node.next = this.head
		this.head = node
		this.length++
		return this
	}
	get(index){
		if(index >= this.length|| index < 0) return null
		let pointer = this.head
		for(let i = 0;i < index; i++) pointer = pointer.next
		return pointer
	}
	set(index,val){
		if(index >= this.length|| index < 0) return null
		let node = this.get(index)
		console.log(node)
		node.val = val
	}
	remove(index){
		if(index < 0) return undefined;
		if(index === 0) return this.shift() ;
		if(index === this.length - 1) return this.pop();
		let prevNode = this.get(index -1)
		const removed = prevNode.next
		prevNode.next = removed.next
		this.length--
		return removed;
	}
	insert(index, val){
		if(index === 0) this.unshift(val)
		if(index === this.length) this.push(val)
		else {
			let newNode = new Node(val)
			let prevNode = this.get(index - 1)
			newNode.next = prevNode.next
			prevNode.next = newNode
			this.length++
		}
	}
	shift(){
		if(!this.head) return undefined
		let pointer = this.head
		this.length--
		if(this.length === 0) this.tail = null
		this.head = pointer.next
		return pointer
	}
	pop(){
		if(!this.head) return undefined
		const poppedNode = this.tail
		this.tail = this.get(--this.length - 1)
		if(this.length === 0) this.head = null
		else 	this.tail.next = null
		return poppedNode
	}
	reverse(){
		/*
		  reverse the order of the link list
		  Inputs; none
		  output: none
		  Data Labels: prev, current , next
		 */
		  // set prev = head and current set to next
		  let prev = this.head
		  let current = this.head.next
		  prev.next = null
		  this.tail = prev
		 // set next to current next
		  let next;
		  // loop while next
		  while(current?.next){
		  	// set next to current.next
				next = current.next
				// set current next to prev
				current.next = prev
				// set perv to current
				prev = current
				// set current to next
				current = next
			}
		  this.head = prev
	}
}
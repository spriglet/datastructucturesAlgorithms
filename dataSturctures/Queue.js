class Node{
	constructor(value){
		this.val = value
		this.next = null
	}
}
export class Queue{
	constructor(){
		this.setFirstLast(null)
		this.size = 0
	}
	setFirstLast(val){
		this.first = val
		this.last = val
	}
	enqueue(val) {
		let node = new Node(val)
		if(this.size === 0) this.setFirstLast(node)
		else{
			this.last.next = node
			this.last = node
		}
		this.size++
	}
	dequeue() {
		if(this.size === 0) return null
		let node = this.first
		if(this.size === 1) this.setFirstLast(null)
		else this.first = this.first.next
		node.next = null
		this.size--
		return node
	}
}
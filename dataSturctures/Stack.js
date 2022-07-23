class Node{
	constructor(val) {
		this.val = val
		this.next = null
	}
}
export class Stack{
	constructor() {
		this.top = null
		this.size = 0
	}
	push(val){
		let node = new Node(val)
		if(this.size === 0) this.top = node
		else{
			node.next = this.top
			this.top = node
		}
		this.size++
	}d
	pop(){
		if(!this.size) return undefined
		let node = this.top
		if(this.size === 1) this.top = null
		else this.top = this.top.next
		node.next = null
		this.size--
		return node
	}
}
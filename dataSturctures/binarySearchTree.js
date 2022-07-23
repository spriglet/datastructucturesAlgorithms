import {Queue } from "./Queue";

class Node{
	constructor(val){
		this.val = val
		this.left = null
		this.right = null
	}
}
export class BinarySearchTree {
	constructor(){
		this.root = null
	}
	breadthFirst = () => {
		/*
		 Traverse the tree putting each element in an array from left to right starting with level 1 then down two level 2 and level 3 and so on
		 Inputs: none
		 outputs: a list of all nodes values starting from the top(root),  then to the level below the root left to right and so on
		 Label important data: visited , queue
		 */
		  // declare queue and visited array
			let queue = new Queue()
		  let visited = []
		  // enqueue th root node
			queue.enqueue(this.root)
			while(queue.first){ // loop while queue not empty
				const dequeuedElement = queue.dequeue().val // dequeue element
				visited.push(dequeuedElement) 	// put in visited array
				// if there is a value in the left and right then enqueue them in the queue starting with left
				if(dequeuedElement.left) queue.enqueue(dequeuedElement.left)
				if(dequeuedElement.right) queue.enqueue(dequeuedElement.right)
			}
		return visited
	}
	dfsPreOrder = () => {
		if(!this.root) return undefined
		let visited = []
		const traverse = (pointer) => {
				visited.push(pointer)
				if(pointer.left) traverse(pointer.left)
				if(pointer.right) traverse(pointer.right)
		}
		traverse(this.root)
		return visited
	}
	dfsInOrder = () => {
		if(!this.root) return undefined
		let visited = []
		const traverse = (pointer) => {
			pointer.left && traverse(pointer.left)
			visited.push(pointer)
			pointer.right && traverse(pointer.right)
		}
		traverse(this.root)
		return visited
	}
	dfsPostOrder = () => {
		if(!this.root) return undefined
		let visited = []
		const traverse = (pointer) => {
				if(pointer.left) traverse(pointer.left)
				if(pointer.right) traverse(pointer.right)
				visited.push(pointer)
		}
		traverse(this.root)
		return visited
	}
	findIfNodeValueExist = (pointer, val, callback) => {
		if(!pointer) return callback(pointer)
		if(pointer.val === val) return callback(pointer)
		else return this.findIfNodeValueExist(pointer[val > pointer.val ? 'right' : 'left'], val, callback)
	}
	find = (val) => this.findIfNodeValueExist(this.root,val, (pointer) => pointer ? pointer : undefined)
	contains = (val) => this.findIfNodeValueExist(this.root,val, (pointer) => pointer ? true : false)
	insert(val){
		let newNode = new Node(val) 	// if root is null set root to node return
		if(!this.root) this.root = newNode
		else { // declare pointer to root
			const findSpotForNode = (pointer) => {
				const pointerSide  = val > pointer.val ? 'right' : 'left'
				if(!pointer[pointerSide]) pointer[pointerSide] = newNode
				else findSpotForNode(pointer[pointerSide])
			}
			findSpotForNode(this.root)
		}
		return this
	}
}
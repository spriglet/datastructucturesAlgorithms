import { BinarySearchTree } from "../binarySearchTree";

it("can insert and search nodes", () => {
	let bst = new BinarySearchTree()
	const arr = [5, 6, 4, 7, 3]
	for(const val of arr) bst.insert(val)
	expect(bst.root.val).toBe(5)
	expect(bst.root.right.val).toBe(6)
	expect(bst.root.right.right.val).toBe(7)
	expect(bst.root.left.val).toBe(4)
	expect(bst.root.left.left.val).toBe(3)
	for(const val of arr) expect(bst.contains(val)).toBe(true)
	expect(bst.contains(100)).toBe(false)
	expect(bst.contains(1)).toBe(false)
	for(const val of arr) expect(bst.find(val).val).toBe(val)
	expect(bst.find(1)).toBe(undefined)
})

it('can traverse tree breadth first', () => {
	let bst = new BinarySearchTree()
	const arr = [5, 6, 4, 7, 3]
	for(const val of arr) bst.insert(val)
	const visited = [5,4,6,3,7]
	const compare = bst.breadthFirst()
	for(const i in visited) expect(visited[i]).toBe(compare[i].val)
})
it('can traverse tree breadth preorder', () => {
	let bst = new BinarySearchTree()
	expect(bst.dfsPreOrder()).toBe(undefined)
	const arr = [5, 6, 4, 7, 3]
	for(const val of arr) bst.insert(val)
	const visited = [5,4,3,6,7]
	const compare = bst.dfsPreOrder()
	for(const i in visited) expect(visited[i]).toBe(compare[i].val)
})
it('can traverse tree breadth preorder', () => {
	let bst = new BinarySearchTree()
	expect(bst.dfsPostOrder()).toBe(undefined)
	const arr = [5, 6, 4, 7, 3]
	for(const val of arr) bst.insert(val)
	const visited = [3,4,7,6,5]
	const compare = bst.dfsPostOrder()
	for(const i in visited) expect(visited[i]).toBe(compare[i].val)
})

it('can traverse tree breadth preorder', () => {
	let bst = new BinarySearchTree()
	expect(bst.dfsPostOrder()).toBe(undefined)
	const arr = [10,6,15, 3, 8, 20]
	for(const val of arr) bst.insert(val)
	const visited = [3,6,8,10,15,20]
	const compare = bst.dfsInOrder()
	for(const i in visited) expect(visited[i]).toBe(compare[i].val)
})
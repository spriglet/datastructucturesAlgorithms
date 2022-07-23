import { DoubleLinkList } from "../DoubleLinkList";



test('reverser', () => {
	let linkList = new DoubleLinkList()
	let arr = []
	for(let i =0;i<4;i++){
		linkList.push(i)
		arr.push(i)
	}
	arr.reverse()
	linkList.reverse()
	for(let i =0;i<4;i++){
		expect(linkList.get(i).val).toBe(arr[i])
	}
})
test('remove', () => {
	let linkList = new DoubleLinkList()
	for(let i =0;i<100;i++){
		linkList.push(i)
	}
	for(let i =0;i<100;i++){
		linkList.remove(0)
	}
	expect(linkList.length).toBe(0)
	for(let i =0;i<100;i++){
		linkList.push(i)
	}
	expect(linkList.remove(10).val).toBe(10)
	expect(linkList.get(10).val).toBe(11)
	expect(linkList.length).toBe(99)
})
test('insert', () => {
	let linkList = new DoubleLinkList()
	for(let i =0;i<100;i++){
		linkList.push(i)
	}
	for(let i =0;i<100;i++){
		expect(linkList.insert(i, i + 10)).toBe(true)
	}
	for(let i =0;i<3;i++){
		expect(linkList.get(i).val).toBe(i + 10)
	}
	expect(linkList.length).toBe(200)
	expect(linkList.get(199).val).toBe(99)
	linkList.insert(200, 200)
	expect(linkList.get(200).val).toBe(200)
})
test('get', () => {
	let linkList = new DoubleLinkList()
	for(let i =0;i<100;i++){
		linkList.push(i)
	}
	expect(linkList.get(-1)).toBe(null)
	expect(linkList.get(100)).toBe(null)
	expect(linkList.get(101)).toBe(null)
	for(let i =0;i<100;i++){
		const node = linkList.get(i)
		expect(node.val).toBe(i)
	}
})
test('set', ()=> {
	let linkList = new DoubleLinkList()
	for(let i =0;i<100;i++){
		linkList.push(i)
	}
	expect(linkList.set(100)).toBe(false)
	expect(linkList.set(101)).toBe(false)
	for(let i =0;i<100;i++){
		expect(linkList.set(i, i * 2)).toBe(true)
	}
	for(let i =0;i<100;i++){
		const node = linkList.get(i)
		expect(node.val).toBe(i * 2)
	}
})
test('doubly pop', () => {
	let linkList = new DoubleLinkList()
	const arr = ['Hi', 'how', 'are', 'hou']
	for(let i =0;i<arr.length;i++){
		linkList.push(arr[i])
	}
	expect(linkList.length).toBe(4)
	const revArr = arr.reverse()
	for(let i =0;i<arr.length;i++){
		expect(linkList.pop().val).toBe(revArr[i])
		if( linkList.tail?.val)
			expect(linkList.tail.val).toBe(revArr[i+ 1])
	}
	expect(linkList.pop()).toBe(undefined)
	expect(linkList.length).toBe(0)
})

test('doubly shift', () => {
	let linkList = new DoubleLinkList()
	const arr = ['Hi', 'how', 'are', 'hou']
	for(let i =0;i<arr.length;i++){
		linkList.push(arr[i])
	}
	expect(linkList.length).toBe(4)
	for(let i =0;i<arr.length;i++){
		expect(linkList.shift().val).toBe(arr[i])
		if( linkList.head?.val)
			expect(linkList.head.val).toBe(arr[i+ 1])
	}
	expect(linkList.shift()).toBe(undefined)
	expect(linkList.length).toBe(0)
})
test('doubly push', () => {
	let linkList = new DoubleLinkList()
	expect(linkList.tail).toBe(null)
	expect(linkList.head).toBe(null)
	expect(linkList.length).toBe(0)
	linkList.push('Hi')
	expect(linkList.head.val).toBe('Hi')
	expect(linkList.head.next).toBe(null)
	expect(linkList.head.prev).toBe(null)
	expect(linkList.tail.val).toBe('Hi')
	expect(linkList.tail.next).toBe(null)
	expect(linkList.tail.prev).toBe(null)
	expect(linkList.length).toBe(1)
	linkList.push('how')
	expect(linkList.head.val).toBe('Hi')
	expect(linkList.head.next.val).toBe('how')
	expect(linkList.head.prev).toBe(null)
	expect(linkList.tail.val).toBe('how')
	expect(linkList.tail.next).toBe(null)
	expect(linkList.tail.prev.val).toBe('Hi')
	expect(linkList.length).toBe(2)
	linkList.push('are')
	expect(linkList.head.val).toBe('Hi')
	expect(linkList.head.next.val).toBe('how')
	expect(linkList.head.prev).toBe(null)
	expect(linkList.tail.val).toBe('are')
	expect(linkList.tail.next).toBe(null)
	expect(linkList.tail.prev.val).toBe('how')
	expect(linkList.length).toBe(3)
})
test('doubly push', () => {
	let linkList = new DoubleLinkList()
	expect(linkList.tail).toBe(null)
	expect(linkList.head).toBe(null)
	expect(linkList.length).toBe(0)
	linkList.unshift('hi')
	expect(linkList.head.val).toBe('hi')
	expect(linkList.head.next).toBe(null)
	expect(linkList.head.prev).toBe(null)
	expect(linkList.tail.val).toBe('hi')
	expect(linkList.tail.next).toBe(null)
	expect(linkList.tail.prev).toBe(null)
	expect(linkList.length).toBe(1)
	linkList.unshift('how')
	expect(linkList.head.val).toBe('how')
	expect(linkList.head.next.val).toBe('hi')
	expect(linkList.head.prev).toBe(null)
	expect(linkList.tail.val).toBe('hi')
	expect(linkList.tail.next).toBe(null)
	expect(linkList.tail.prev.val).toBe('how')
	expect(linkList.length).toBe(2)
	linkList.unshift('are')
	expect(linkList.head.val).toBe('are')
	expect(linkList.head.next.val).toBe('how')
	expect(linkList.head.prev).toBe(null)
	expect(linkList.tail.val).toBe('hi')
	expect(linkList.tail.next).toBe(null)
	expect(linkList.tail.prev.val).toBe('how')
	expect(linkList.length).toBe(3)
})
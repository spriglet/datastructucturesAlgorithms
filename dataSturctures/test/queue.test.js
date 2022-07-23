import { Queue } from "../Queue";

it('Queue',()=> {
	const queue = new Queue()
	let arr = ['first', 'second', 'third', 'fourth']
	expect(queue.size).toBe(0)
	for(const val of arr)  queue.enqueue(val)
	expect(queue.size).toBe(4)
	for(const val of arr){
		expect(queue.dequeue().val).toBe(val)
	}
	expect(queue.size).toBe(0)
	expect(queue.dequeue()).toBe(null)
})
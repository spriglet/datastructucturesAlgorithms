import { PriorityQueue } from "../PriorityQueue";

let priorityQueue = new PriorityQueue()
const arr = [
	{data: 'walk the dog', priority: 3},
	{data: 'pay bills', priority: 1},
	{data: 'finish project', priority: 2},
	{data: 'clean house', priority: 3},
	{data: 'eat food', priority: 0}
]
test('enqueue', () => {
	 for(let obj of arr) priorityQueue.enqueue(obj.data, obj.priority)
		expect(priorityQueue.values[0].data).toBe('eat food')
	  expect(priorityQueue.values[1].data).toBe('pay bills')
	  expect(priorityQueue.values[2].data).toBe('finish project')
	  expect(priorityQueue.values[3].data).toBe('clean house')
	  expect(priorityQueue.values[4].data).toBe('walk the dog')
})
test('dequeue', () => {
	expect(priorityQueue.dequeue().data).toBe('eat food')
	expect(priorityQueue.dequeue().data).toBe('pay bills')
	expect(priorityQueue.dequeue().data).toBe('finish project')
	expect(priorityQueue.dequeue().data).toBe('clean house')
	expect(priorityQueue.dequeue().data).toBe('walk the dog')
	expect(priorityQueue.dequeue()?.data).toBe(undefined)
})
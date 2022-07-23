import { MaxBinaryHeap } from "../maxBinaryHeap";

test('Insert', () => {
	let arr = [10,15,6,22,33,2]
	const snapShots = {
		0: [10],
		1: [15,10],
		2: [15,10, 6],
		3: [22,15,6,10],
		4: [33,22,6,10,15],
		5: [33,22,6,10,15,2],
	}
	let maxBinaryHeap = new MaxBinaryHeap()
	for(let index in arr){
		const values = maxBinaryHeap.insert(arr[index])
		expect(snapShots[index]).toStrictEqual(values)
	}
})

test('Extract max values', () => {
	let arr = [33,22,6,10,15,2]
	let heap = new MaxBinaryHeap()
	for(let value of arr) heap.insert(value)
	const top = heap.extractMax()
	expect(top).toBe(33)
	expect(heap.values).toStrictEqual(	[22,15,6,10,2])
	let heapOfOne = new MaxBinaryHeap()
	heapOfOne.insert(15)
	expect(heapOfOne.extractMax()).toBe(15)
	let heapOfTwo = new MaxBinaryHeap()
	heapOfTwo.insert(10)
	heapOfTwo.insert(15)
	expect(heapOfTwo.extractMax()).toBe(15)
	expect(heapOfTwo.extractMax()).toBe(10)
	expect(heapOfTwo.extractMax()).toBe(undefined)
})
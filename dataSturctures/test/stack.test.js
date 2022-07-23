import { Stack } from "../Stack";

test('pop and push', () => {
	let arr = ['first', 'second', 'third', 'fourth']
	const stack = new Stack()
	for(const i in arr) stack.push(arr[i])
	arr.reverse()
	for(const val of arr){
		expect(stack.pop().val).toBe(val)
	}
	expect(stack.size).toBe(0)
	expect(stack.top).toBe(null)
	stack.push('first')
	expect(stack.pop().val).toBe('first')
	stack.push('first')
	stack.push('second')
	expect(stack.top.next.val).toBe('first')
})

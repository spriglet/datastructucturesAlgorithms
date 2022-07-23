import { SinglyLinkList } from "../singlyLinkList";

let linkList = new SinglyLinkList()
test('Push', () => {
	for(let i = 0;i<5;i++){
		linkList.push(i)
	}
	expect(linkList.length).toBe(5)
})
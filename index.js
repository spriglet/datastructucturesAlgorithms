import { DoubleLinkList } from "./dataSturctures/DoubleLinkList.js";

let linkList = new DoubleLinkList()
for(let i =0;i<10;i++){
	linkList.push(i)
}

for(let i =0;i<10;i++){
	linkList.get(i)
}
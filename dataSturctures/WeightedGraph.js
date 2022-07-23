export class WeightedGraph {
	constructor(){
		this.adjacencyList = {}
	}
	addEdge(vertex1, vertex2, weight){
		if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
			this.adjacencyList[vertex1].push({node: vertex2, weight })
			this.adjacencyList[vertex2].push({node: vertex1, weight })
		}else{
			return undefined
		}
	}
	addVertex(vertex){
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
	}
}
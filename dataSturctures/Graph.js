import { Stack } from "./Stack";
import { Queue } from "./Queue";

export class Graph{
	constructor() {
		this.adjacencyList = {}
	}
	addVertex(vertex){
		if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = []
	}
	removeEdge(vertex1, vertex2){
		if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
			this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter((vertex) => vertex !== vertex2)
			this.adjacencyList[vertex2] =  this.adjacencyList[vertex2].filter((vertex) => vertex !== vertex1)
		}else{
			return undefined
		}
	}d
	removeVertex(vertex) {
		delete this.adjacencyList[vertex]
		Object.keys(this.adjacencyList).forEach((key) => {
			this.adjacencyList[key] = this.adjacencyList[key].filter((edge) => vertex !== edge)
		})
	}
	addEdge(vertex1, vertex2){
		if(this.adjacencyList[vertex1] && this.adjacencyList[vertex2]){
			this.adjacencyList[vertex1].push(vertex2)
			this.adjacencyList[vertex2].push(vertex1)
		}else{
			return undefined
		}
	}
	breadthFirst(start){
		/* Visit the node then all its neighbors neighbors until you have visited all vertices in the graph
			 Input: starting point where from which vertex we are starting from  in the graph
			 output: the order in which we visited nodes
			 Labels of important data; Queue, queuedVertices Object, order (order in which we visited the nodes
	 */
		// define a queue and add the start vertex to the que
		let queue = new Queue()
		queue.enqueue(start)
		let order = []
		let queuedVertices = {[start]: true}
		// loop while queue is not empty
		while(queue.size){
			// get vertex from the queue mark it as visited,put it in the order array and mark visited as true
			const vertex = queue.dequeue().val
			order.push(vertex)
			// loop through neighbors
			this.adjacencyList[vertex].forEach((neighbor) => {
				// if it hasn't been queued put it in the queue
				if(!queuedVertices[neighbor]){
					queuedVertices[neighbor] = true
					queue.enqueue(neighbor)
				}
			})
		}
		return order
  }
	depthFirstIterative(vertex){
		let stack = new Stack() // declare the stack
		let visitedVertices = {[vertex]: true} // update visited with starting vertex
		let order = [] // update order with starting vertex
		// put the first vertex on the stack
		stack.push(vertex)
		// loop while stack not empty
		while(stack.size){
			const vertex = stack.pop().val
			const neighbors = this.adjacencyList[vertex] || [] // peek at the top of the stack
			order.push(vertex)
			neighbors.forEach((neighbor) => {
			// if visited all nodes pop off the stack
				if(!visitedVertices[neighbor]){
					// if haven't visited vertex put the vertex on the top of the stack and break loop
					visitedVertices[neighbor] = true
					stack.push(neighbor)
				}
			})
		}
		return order
	}
	depthFirstRecursive(vertex){
		/*
			Visit each node choosing a starting point and then visit each of the starting with
			lowest value.
			Inputs: starting vertex
			Outputs: none
			Label important data: visitedVertices (obj), helper function traverseGraph,
		 */
			// declare object visitedVertices
			let visitedVertices = {};
			let order = [];
			const adjacencyList = this.adjacencyList;

			(function traverseGraph(vertex){ 	// traverseGraph explore vertices
				/*
					traverses all unvisited vertices until all of them have been visited
				 */
				// set visited object key to true
				visitedVertices[vertex] = true
				order.push(vertex)
				// get vertices edges edges
				// loop through edges
				for(const edge of adjacencyList[vertex]){
					// if not visited call helper function
					if(!visitedVertices[edge]) traverseGraph(edge)
				}
			})(vertex)	// call traverseGraph function with first vertex as its parameter
			return order
	}
}
import { PriorityQueue } from "./PriorityQueue";

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
	shortestPath(vertexStart, vertexEnd){
		/*
				Function takes to vertexes and finds the shortest distance between the two.
				Inputs: vertex one and vertex two
				Outputs: the path
				Can the outputs be derived frm the inputs?:
				Label of important data: queue (which determines the data value to choose next, visited, shortest path array (array with the shortest path to a given point)
		 */
		// declare visited object
		let visited = {}
		// declare shortestPath object and set defaults with the start point to zero and all other distances to zero and prev to null
		const shortestPathObject = {}
		Object.keys(this.adjacencyList).forEach((key) => {
			shortestPathObject[key] = {distance: Infinity, prev:null }
		})
		shortestPathObject[vertexStart].distance = 0
		// declare queue
		let priorityQueue = new PriorityQueue()
		// put VertexSTart in the queue
		priorityQueue.enqueue(vertexStart, 0)
		// put vertex start in the visited object

		// loop while queue not empty
		while(priorityQueue.values.length){
			// dequeue vertex
			const visitedVertex = priorityQueue.dequeue()?.data
			visited[visitedVertex] = true
			// loop through neighbors
			const neighbors = this.adjacencyList[visitedVertex] || []
			for(const neighbor of neighbors){
				if(!visited[neighbor.node]){ 		// if neighbor hasn't been visited then
					// compare the total distance from the starting point and if it is lower
					const distance = neighbor.weight + shortestPathObject[visitedVertex].distance
					if(distance < shortestPathObject[neighbor.node].distance){
						// set the value of its shortest distance with the new value and set its prev to the dequeued vertex
						shortestPathObject[neighbor.node].distance = distance
						shortestPathObject[neighbor.node].prev = visitedVertex
						priorityQueue.enqueue(neighbor.node, distance)
					}
				}
			}
		}
		// build shortest patjh array and return it.
		let backTrackVertex = shortestPathObject[vertexEnd]
		let shortestPath = [vertexEnd]
		while(backTrackVertex.prev){
			shortestPath.push(backTrackVertex.prev)
			backTrackVertex = shortestPathObject[backTrackVertex.prev]
		}
		// declare shortest path array and
		return shortestPath.reverse()
	}
}
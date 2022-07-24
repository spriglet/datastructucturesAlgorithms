import { WeightedGraph } from "../WeightedGraph";


it('can add vertex', () => {
	const vertices  = ['A','B', 'C']
	let wGraph = new WeightedGraph()
	vertices.forEach((vertex) => {
		wGraph.addVertex(vertex)
		expect(wGraph.adjacencyList[vertex]).toStrictEqual([])
	})
	wGraph.addEdge('A', 'B', 3)
	wGraph.addEdge('A', 'C', 7)
	expect(wGraph.adjacencyList['A']).toStrictEqual([{ node:'B', weight: 3}, { node:'C', weight: 7}])
	expect(wGraph.adjacencyList['B']).toStrictEqual([{ node:'A', weight: 3}])
})


it('shortest path', () => {
	const arr = ['A', 'B', 'C', 'D', 'E', 'F']
	let wGraph = new WeightedGraph()
	for(const vertex of arr) wGraph.addVertex(vertex)
	wGraph.addEdge('A', 'B', 4)
	wGraph.addEdge('A', 'C', 2)
	wGraph.addEdge('B', 'E', 3)
	wGraph.addEdge('C', 'D', 2)
	wGraph.addEdge('C', 'F', 4)
	wGraph.addEdge('D', 'F', 1)
	wGraph.addEdge('D', 'E', 3)
	wGraph.addEdge('F', 'E', 1)
	expect( wGraph.shortestPath('A', 'E')).toStrictEqual(['A', 'C', 'D', 'F', 'E'])
	expect( wGraph.shortestPath('A', 'D')).toStrictEqual(['A', 'C', 'D'])
	expect( wGraph.shortestPath('C', 'B')).toStrictEqual(['C', 'A', 'B'])
})
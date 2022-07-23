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

	console.log(wGraph.adjacencyList)
})

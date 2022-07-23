import { Graph } from "../Graph";

it('can add vertex', () => {
	let g = new Graph()
	const arr = ['Tokyo', 'Aspen', 'Dallas']
	for(const city of arr){
		g.addVertex(city)
		expect(g.adjacencyList[city]).toStrictEqual([])
	}
})

it('add edge remove edge', () => {
	let g = new Graph()
	const arr = ['Tokyo', 'Aspen', 'Dallas']
	for(const city of arr){
		g.addVertex(city)
		expect(g.adjacencyList[city]).toStrictEqual([])
	}
	for(const city of arr.slice(1)){
		g.addEdge('Tokyo', city)
	}
	expect(g.adjacencyList['Tokyo']).toStrictEqual([ 'Aspen', 'Dallas'])
	expect(g.adjacencyList['Dallas']).toStrictEqual([ 'Tokyo'])
	expect(g.adjacencyList['Aspen']).toStrictEqual([ 'Tokyo'])
	g.removeEdge('Tokyo', 'Dallas')
	expect(g.adjacencyList['Tokyo']).toStrictEqual([ 'Aspen'])
	expect(g.adjacencyList['Dallas']).toStrictEqual([])
})
it('remove vertex', () => {
	let g = new Graph()
	const arr = ['Tokyo', 'Aspen', 'Dallas']
	for(const city of arr){
		g.addVertex(city)
		expect(g.adjacencyList[city]).toStrictEqual([])
	}
	for(const city of arr.slice(1)){
		g.addEdge('Tokyo', city)
	}
	for(const city of arr.slice(0,2)){
		g.addEdge('Dallas', city)
	}
	g.removeVertex('Tokyo')
	expect(g.adjacencyList['Tokyo']).toStrictEqual(undefined)
	expect(g.adjacencyList['Dallas']).toStrictEqual(['Aspen'])
	expect(g.adjacencyList['Aspen']).toStrictEqual(['Dallas'])
})

it('depth first traversal', () => {
	let g = new Graph()
	const vertices = new Map();
	vertices.set('A', ['B', 'E'])
	vertices.set('B', ['C', 'D'])
	vertices.set('C', [ 'D'])
	vertices.set('D', [ 'E', 'F'])
	vertices.set('E', [ 'F'])
	vertices.set('F', [])
	for(const vertex of  vertices.keys()) g.addVertex(vertex)
	for(const vertex of  vertices.keys()){
		const edges = vertices.get(vertex)
		for(const edge of edges) g.addEdge(vertex, edge)
	}
	const visitedVertices = g.depthFirstRecursive('A')
	const arr = ['A', 'B', 'C', 'D', 'E', 'F']
	for(const i in arr) expect(visitedVertices[i]).toBe(arr[i])
})


it('Graph from class', () => {
	let g = new Graph()
	const vertices = ['A', 'B', 'C', 'D', 'E', 'F']
	for(const vertex of  vertices) g.addVertex(vertex)
	g.addEdge('A', 'B')
	g.addEdge('A', 'C')
	g.addEdge('B', 'D')
	g.addEdge('C', 'E')
	g.addEdge('D', 'E')
	g.addEdge('D', 'F')
	g.addEdge('E', 'F')
	const visitedVertices = g.depthFirstRecursive('A')
	const arr = ['A', 'B', 'D', 'E', 'C', 'F']
	for(const i in arr) expect(visitedVertices[i]).toBe(arr[i])
})

it('Graph from class', () => {
	let g = new Graph()
	const vertices = ['A', 'B', 'C', 'D', 'E', 'F']
	for(const vertex of  vertices) g.addVertex(vertex)
	g.addEdge('A', 'B')
	g.addEdge('A', 'C')
	g.addEdge('B', 'D')
	g.addEdge('C', 'E')
	g.addEdge('D', 'E')
	g.addEdge('D', 'F')
	g.addEdge('E', 'F')
	const visitedVertices = g.depthFirstIterative('A')
	const arr =  [ 'A', 'C', 'E', 'F', 'D', 'B' ]
	for(const i in arr) expect(visitedVertices[i]).toBe(arr[i])
})

it('Breadth First', () => {
	let g = new Graph()
	const vertices = ['A', 'B', 'C', 'D', 'E', 'F']
	for(const vertex of  vertices) g.addVertex(vertex)
	g.addEdge('A', 'B')
	g.addEdge('A', 'C')
	g.addEdge('B', 'D')
	g.addEdge('C', 'E')
	g.addEdge('D', 'E')
	g.addEdge('D', 'F')
	g.addEdge('E', 'F')
	const visitedVertices = g.breadthFirst('A')
	const arr =  [ 'A', 'B', 'C', 'D', 'E', 'F' ]
	for(const i in arr) expect(visitedVertices[i]).toBe(arr[i])
})
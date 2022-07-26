const randomNumberBetween = (start,to) => Math.floor((Math.random())* to)
const randomSortedNumbers = (choices) => {
	 /*
			Return an array of numbers from 1 to the number specified with the numbers arranged in a random order.
			Input: number of choices
			Output: random sorted array
			Labels of Important data: numbered array, randomly arranged array
	 */
	// declare and create the array of numbers
	let numbers = []
	for(let i = 0;i<choices;i++){
		numbers.push(i)
	}
	// declare randomized array
	let randomizedArray = []
	// loop while array of numbers is not empty
	while(numbers.length){
		// choose a random number between 0 and the length of numbers array minus
		const randomIndex = randomNumberBetween(0,numbers.length)
		// use that index to get the value and push it into randomized array
		randomizedArray.push(numbers[randomIndex])
		// take element out of array of numbers
		numbers.splice(randomIndex,1)
	}
	// return randomized array
	return randomizedArray
}
const didAllPrisonersFindTheirNumber = (numberOfPrisoners) => {
	if(numberOfPrisoners % 2 === 1) return 'Number of prisoners must be even'
	const boxes = randomSortedNumbers(numberOfPrisoners)
	let prisonerData = []
	for(let i = 0; i<numberOfPrisoners;i++){
		let numberOfChoices  = 0;
		let choice = i
		let path = []
		for(let j = 1; j<=numberOfPrisoners;j++){
			const number = boxes[choice]
			numberOfChoices++
			if(number === i){
				path.push(number)
				prisonerData.push({numberOfTries: numberOfChoices, success:  numberOfChoices <= (numberOfPrisoners / 2), path, prisonerNumber: i } )
				break;
			}
			path.push(number)
			choice = number
		}
	}
	return {boxes, prisonerData}
}
let numberOfSuccess = 0
const numberIterations = 1
const numberOfPrisoners = 100
let bulkData = []
for(let i = 0; i < numberIterations; i++){

	const data = didAllPrisonersFindTheirNumber(numberOfPrisoners)
	if(data.prisonerData.filter((obj) => obj.success).length === numberOfPrisoners ? true : false) numberOfSuccess++
  const {boxes, prisonerData} = data
	const stats = {iteration: 0, loops: [], randomNumberedBoxes: null, randomNumberedBoxes:boxes}
	let longestLoop = { prisonerNumber:null, length:null, path: null }
	for(let j = 0 ; j < numberOfPrisoners; j++){
		const { path } = prisonerData[j]
		longestLoop.prisonerNumber = j
		longestLoop.length = path.length
		longestLoop.path = path
		const sort1 = [...path].sort((a, b) => a - b)
		let pathExist = false
		for(const path of stats.loops){
			const sort2 = [...path].sort((a, b) => a - b)
			if(sort2.toString() === sort1.toString()){
				pathExist = true
				break;
			}
		}
		if(!pathExist) stats.loops.push(path)
	}
	bulkData.push(stats)
}
for(const stats of bulkData){
	const {loops} = stats
	console.log('boxes', stats.randomNumberedBoxes)
	console.log('number of loops', loops.length)
	for(const loop of loops){
		console.log('loop length', loop.length)
		console.log('path of the loop', loop)
	}
}
console.log((100 * (numberOfSuccess / numberIterations)).toString() + '%')
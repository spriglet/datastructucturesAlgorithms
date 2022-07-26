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
		// choose a random number between 0 and the length of numbers array minus one
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
	let prisoners = []
	for(let i = 0; i<numberOfPrisoners;i++){
		let numberOfChoices  = 0;
		let choice = i
		let path = []
		for(let j = 1; j<=numberOfPrisoners;j++){
			const number = boxes[choice]
			numberOfChoices++
			if(number === i){
				path.push(number)
				prisoners.push({numberOfTries: numberOfChoices, success:  numberOfChoices <= (numberOfPrisoners / 2), path, prisonerNumber: i } )
				break;
			}
			path.push(number)
			choice = number
		}
	}
	return prisoners.filter((obj) => obj.success).length === numberOfPrisoners ? true : false
}
let numberOfSuccess = 0
const numberIterations = 10000
for(let i = 0; i < numberIterations; i++){
	const success = didAllPrisonersFindTheirNumber(100)
	if(success) numberOfSuccess++
}
console.log((100 * (numberOfSuccess / numberIterations)).toString() + '%')
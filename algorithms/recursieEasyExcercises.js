

// Right a function that takes in a num and find the nth position of the Fibonacci number in the sequence 1,1,2,3,5,8 ...
// Input nth number in the sequence
// Nth Fibonacci number in the sequence
// Names of important data  n, sum
function fibNotSoEasyToRead(n,current=null,prev=null){
  if (n === 1) return prev + current
	if (current == null) return fib(--n, 1, 0 )
	else return fib(--n,current + prev, current)
}

function fib(n){
	if (n <= 2) return 1;
	return fib(n-1) + fib(n-2);
}

console.log('3:', fib(4))
console.log('55:', fib(10))
console.log('317811:', fib(28))
console.log('9227465:', fib(35))




function isPalindrome(str){
	// add whatever parameters you deem necessary - good luck!
	if(str.length <= 1) return true
	const head = str[0]
	const tail = str[str.length -1]
	if(head === tail) return isPalindrome(str.substr(1, str.length - 2))
	else return false
}

console.log(isPalindrome('awesome')) // false
console.log(isPalindrome('foobar')) // false
console.log(isPalindrome('tacocat')) // true
// isPalindrome('amanaplanacanalpanama') // true
// isPalindrome('amanaplanacanalpandemonium') // false
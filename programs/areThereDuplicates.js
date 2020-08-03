// Frequency Counter Pattern Exercise

// Check if there are any duplicates passed amongst the arguments

const areThereDuplicates = (...args) => {
	if (args.length < 1) return 0

	const freq = {}

	for (let i =0; i < args.length; i++){
		freq[args[i]] = (freq[args[i]] || 0) + 1
	}
	for (const key in freq){
		if (freq[key] > 1){
			return true
		}
	}
	return false
}

console.log(areThereDuplicates(1,2,6)) // Assert false
console.log(areThereDuplicates(5,3,3)) // Assert true
console.log(areThereDuplicates('a', 'b', 'c', 'a')) // Assert true

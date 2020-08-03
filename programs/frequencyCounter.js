/*
 * Function should return true if every value in the arraysAndObjects
 * has it's corresponding value squared in the second array.
 * Frequency of values must be the same.
 *
*/

// Naive solution O(n^2)
const same = (arr, arr1) => {
	if (arr.length !== arr1.length){
		return false
	}
	for (let i = 0; i < arr.length; i++){
		let correctIndex = arr1.indexOf(arr[i] ** 2)
		if (correctIndex === -1){
			return false
		}
		arr1.splice(correctIndex,1)
	}
	return true
}


same([1,2,3],[4,1,9])
same([1,2,3],[1,9])
same([1,2,1],[4,4,1])

// Efficient Solution O(n)
const sameEff = (arr,arr1) => {
	if (arr.length !== arr1.length){
		return false
	}
	const freq = {}
	const freq1 = {}

	for(const element of arr){
		freq[element] = (freq[element] || 0) + 1
	}

	for(const element of arr1){
		freq1[element] = (freq1[element] || 0) + 1
	}

	for (const key in freq){
		const squared = key * key
		if(!(squared in freq1)){
			return false
		}
		if((freq[key] !== freq1[squared])) {
			return false
		}
	}
	return true
}

console.log(sameEff ([2,4,3,6],[4,16,9,36]))
console.log(sameEff([1,2,3],[1,9]))
sameEff([1,2,1],[4,4,1])


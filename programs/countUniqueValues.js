/*
 * Implement a function which accepts a sorted array
 * and counts the unique values in said array.
 *
*/
 // O(n) Time

const countUniqueValues = (arr) => {
	let i = 0
	if (arr.length === 0) return 0
	for(let j = 1; j < arr.length; j++){
		if(arr[i] !== arr[j]){
			i++
			arr[i] = arr[j]
		}
	}
	return i + 1 
}

console.log(countUniqueValues([1,1,1,1,2,3,4,5]))
console.log(countUniqueValues([-2,-1,-1,0,1]))
console.log(countUniqueValues([]))


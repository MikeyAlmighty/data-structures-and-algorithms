const maxSubArraySum = (arr, num) => {
	let tempSum = 0
	let maxSum = 0

	if (arr.length < num) return null
	// Build up intial Window
	for (let i = 0; i < num; i++){
		maxSum  += arr[i]
	}

	tempSum = maxSum // Set tempSum to equal Initial Window

	// Loop over the array but we start after Initial Window
	for (let i = num; i < arr.length; i++){
		// We subtract the element of the "front" index
		// and add the element of the window's endIndex + 1
		tempSum = tempSum - arr[i - num] + arr[i] 
		maxSum = Math.max(maxSum,tempSum) // Retrieve the max from the two arrays
		return maxSum // return the max
	}
}


console.log(maxSubArraySum([2,6,9,2,1,8,5,6,3], 3))



const maxSubArraySumPrac = (arr, num) => {
	if (arr.length < num) return null

	let tempSum = 0
	let maxSum = 0

	for (let i = 0; i < num; i++){
		maxSum += arr[i]
	}

	tempSum = maxSum

	for(let i = num; i < arr.length; i++){
		tempSum = tempSum - arr[i-num] + arr[i]
		maxSum = Math.max(tempSum,maxSum)
		return maxSum
	}
}



console.log(maxSubArraySumPrac([2,6,9,2,1,8,5,6,3], 3))

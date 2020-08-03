// Frequency Counter Pattern Exercise

// Given two positive integers,
// Find out if two numbers have the same frequency of digits.

// eg. 182, 281 => true
// eg. 34, 14 => false
// eg. 3589578, 5879385 => true

const sameFrequency = (num1,num2) => {
	const str1 = num1.toString()
	const str2 = num2.toString()

	const freq1 = {}
	const freq2 = {}

	if (str1.length !== str2.length){
		return false
	}

	for (let i = 0; i < str1.length; i++){
		freq1[str1[i]] = (freq1[str1[i]] || 0) + 1
	}

	for (let i = 0; i < str2.length; i++){
		freq2[str2[i]] = (freq2[str2[i]] || 0) + 1
	}

	for (const objKey in freq1){
		if (!(objKey in freq2)){
			return false
		}
		return true
	}
}

console.log(sameFrequency(1833,3813))
console.log(sameFrequency(34,14))
console.log(sameFrequency(3589578,5879385))

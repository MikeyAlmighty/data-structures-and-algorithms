/*
 * Given 2 strings determine if second string is an anagram of the first
 *
 */

const checkAnagram = (word,word1) => {
	if (word.length !== word1.length) {
		return false
	}
	const freqWord = {}	
	const freqWord1 = {}	

	for (const element of word){
		freqWord[element] = (freqWord[element] || 0) + 1
	}

	for (const element of word1){
		freqWord1[element] = (freqWord1[element] || 0) + 1
	}

	for(const key in freqWord){
		if (!(key in freqWord1)){
			return false
		}

		if(freqWord1[key] !== freqWord[key]){
			return false
		}
	}
	return true
}


console.log(checkAnagram("",""))
console.log(checkAnagram("aaz","zza"))
console.log(checkAnagram("anagram","nagaram"))
console.log(checkAnagram("rat","cat"))
console.log(checkAnagram("awesome","awesom"))
console.log(checkAnagram("qwerty","qeywrt"))
console.log(checkAnagram("texttwisttime","timetwisttext"))

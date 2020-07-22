/*
 * Given 2 strings determine if second string is an anagram of the first
 *
 */

const checkAnagram = (word,word1) => {
    if (word.length !== word1.length) {
        return false
    }
    const freqWord = {} 

    for (const element of word){
        freqWord[element] = (freqWord[element] || 0) + 1
    }


    for(let i =0; i < word1.length; i++ ){
        let letter = word1[i]
        if (!(freqWord[letter])){
            return false
        } else {
            if (freqWord[letter]){
                freqWord[letter] -= 1
            }
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

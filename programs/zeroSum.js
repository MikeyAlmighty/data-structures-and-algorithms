// i,x1,x2,x3,x4,j
// ->           <-
// x1,i,x2,x3,x4,j
// x1,i,x2,x3,j,x4


/*
 * Write a function which accepts a sorted
 * array of integers. The function should find the first pair
 * where the sum is 0. Return an array that includes both values
 * that sum zero.
 *
 */


const sumZero = (arr) => {
	let begin = 0
	let end = arr.length -1

	while (begin < end){
		let sum = arr[begin] + arr[end]
		if( sum=== 0){
			return [begin,end]
		} else if(sum > 0){
			end--
		} else {
			begin++
		}
	}
}


console.log(sumZero([-3,-2,-1,0,4,5]))

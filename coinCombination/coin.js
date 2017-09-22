function getCoins(value) {
	//write your code here
	let arr = [1]
	let temp
	for(let i = 5; i <= 33; i+=2){
		arr.push(i)
		// let temp
		for(let j = 0; j < arr.length; j++){
			if(arr[j] + arr[j+1] === value){
				temp = arr.slice(0, (arr.length - value) + 1)
			}
		}
	}
	return (temp) ? temp.splice(0, 2, 4) + ' ' + temp.splice(1, 2, 7) : -1



}

// 1, 5, 7, 9, 11, 13, 15, 17, 19, 21, 23, 25, 27, 29, 31, 33 // length nya 16
// 16 - 12  = 4 , 4 = 1 + 3
console.log(getCoins(12)) // value itu 12 
// getCoins(12) //[1, 11] dan [5, 7] index ke 0 dan 4, index ke 1 dan 3
// getCoins(17) //[1, 5, 11] dan [1,7,9] index ke 0 , 1 dan 4, index ke 0, 2 dan 3
// getCoins(3) //-1 tidak ada

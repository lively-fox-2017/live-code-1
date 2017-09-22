function getCoins(value) {
	//write your code here
	// Koin yang ada 1, 5, 7, 9, dan 11
	let coin = [1, 5, 7, 9, 11];
	let count = 0
	let guess = []
	let temp = 0
	for (let i =0; i < coin.length; i++) {

		// if (count + coin[i] <= value) (
		// 	count += coin[i]
		// )
		// 	guess.push(coin[i])
		// 	console.log(count)
		// if (count < value) {
		// 	count += coin[i]
		// }
		// coin = coin.slice(i)
		// console.log(coin)
		// value -= coin[i]
		// // guess.push(coin[i])
		// if (coin.indexOf(value)!== -1) {
		// 	guess.push(coin[i])
		// 	guess.push(coin[coin.indexOf(value)])
		// }
		if (count + coin[i] <= value) {
			count += coin[i]
			guess.push(coin[i])
			console.log(count)
	
			// console.log(coin.indexOf(value))
		}
	}
	let sum = guess.reduce((a,b)=>{return a+b})
	if (sum > value){
		guess.shift()
	}

	// console.log(count)
// 	guess = guess.slice(0,guess.length/2)
	console.log(guess)
 }


getCoins(12) //[1, 11] dan [5, 7]
// getCoins(17) //[1, 5, 11] dan [1,7,9]
// getCoins(3) //-1

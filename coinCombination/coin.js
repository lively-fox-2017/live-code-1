function getCoins(value) {
	let coins = [1, 5, 7, 9, 11];
	let twoCombinations = [];
	let threeCombinations = [];
	let result = [];

	// 2 combination
	for (let i = 0; i < coins.length; i++) {
		let combination = [];
		for (let j = i + 1; j < coins.length; j++) {
			if (i !== j) {
				combination.push([coins[i], coins[j]]);
			}
		}
		twoCombinations.push(...combination);
	}

	// 3 combination
	for (let i = 0; i < coins.length; i++) {
		let combination = [];
		for (let j = i + 1; j < coins.length; j++) {
			for (let k = j + 1; k < coins.length; k++) {
				if (i !== j && i !== k && j !== k) {
					combination.push([coins[i], coins[j], coins[k]]);
				}
			}
		}
		threeCombinations.push(...combination);
	}

	twoCombinations = twoCombinations
						.filter(comb => {
							return comb.reduce((total, val) => total + val, 0) === value;
						})
						.forEach(comb => result.push(comb));
	threeCombinations = threeCombinations
						.filter(comb => {
							return comb.reduce((total, val) => total + val, 0) === value;
						})
						.forEach(comb => result.push(comb));

	return result.length > 0 ? result : -1;
 }


console.log(getCoins(12)) //[1, 11] dan [5, 7]
console.log(getCoins(17)) //[1, 5, 11] dan [1,7,9]
console.log(getCoins(3)) //-1

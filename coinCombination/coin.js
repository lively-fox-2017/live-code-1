function getCoins(value) {
	let number = [1, 5, 7, 9, 11];
	let arr = [];
	let i;
	let j;
	let k;

	for (i = 0; i < number.length; i++) {
		for (j = 0 + i; j < number.length; j++) {
			if (number[i] + number[j] == value && number[i] !== number[j]) {
				arr.push([number[i] + ',' + number[j]]);
			} else {
				for (k = j + 1; k < number.length; k++) {
					if (number[i] + number[j] + number[k] == value && number[i] !== number[j]) {
						arr.push([number[i] + ',' + number[j] + ',' + number[k]]);
					}
				}
			}
		}
	}

	if (arr.length > 0) {
		return console.log(arr);
	} else {
		return console.log(-1);
	}


}


getCoins(12) //[1, 11] dan [5, 7]
getCoins(17) //[1, 5, 11] dan [1,7,9]
getCoins(3) //-1

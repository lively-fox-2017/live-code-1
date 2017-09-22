function reorderingLetter(str, totalLevel) {
	str = str.split('');
	let count = str.length;
	let tempRes = {}

	let temp = [];
	for (let i = 1; i <= totalLevel; i++) {
		tempRes[i] = [];
	}

	let navBefore = 1;
	let nav = 1;
	for (let j = 0; j < str.length; j++) {
		tempRes[nav].push(str[j]);

		if (nav === totalLevel) navBefore = totalLevel;
		if (nav === 1) navBefore = 1;
		if (navBefore === 1 && nav < totalLevel) {
			nav++;
		} else if (navBefore === totalLevel && nav > 1) {
			nav--;
		}
	}
	return tempRes;
}

console.log(reorderingLetter('DARWINFOX', 3)) //DIXAWNORF
console.log(reorderingLetter('ABCDEFGHIJKLMNOPQ', 5)) //AIQBHJPCGKODFLNEM

let data = [1, 5, 7, 9, 11];

function getCoins(value) {
	let tampung = [];
	for (var a = 0; a < data.length; a++) {
		console.log(data[a]);
		for (var b = 0; b < a; b++) {
			if (data[a] + data[b] === value) {
				console.log(data[a]);
				let jumlah = value - data[a];
				console.log(jumlah);
				tampung.push(jumlah, data[a]);
			}
			for (var c = 0; c < c; c++) {
				if(data[a]+data[b]+data[c])
			}
			
		}
	}
	return tampung;
}


console.log(getCoins(12)); //[1, 11] dan [5, 7]
console.log(getCoins(17)); //[1, 5, 11] dan [1,7,9]
console.log(getCoins(3)); //-1
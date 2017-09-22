"use strict"

function getCoins(value) {
	//write your code here
	let coins = [1,5,7,9,11]
	let combinations = []
	let pair = [];
	
	for(let i = 0; i < coins.length; i++){
		for(let j = 0; j < coins.length; j++){
			let total = coins[j];
			pair = []
			for(let k = 0; k < coins.length - j; k++){
				if(k !== j){
					total += coins[k];
					pair.push(coins[k])
				}
				console.log(total)
				if(total === value){
					combinations.push(pair);
				}
			}
			
		}
	}
	return pair;
}


console.log(getCoins(12)) //[1, 11] dan [5, 7]
//console.log(getCoins(17)) //[1, 5, 11] dan [1,7,9]
//getCoins(3) //-1

/*
Logic - Unique Coin Combination

## Skor Total 30

Kita memiliki coin dengan nilai sbb : 1,5,7,9,11, masing-masing coin dibatasi hanya berjumlah 1. Buat sebuah function, yang menerima number berupa sebuah angka (maksimum 33), bisa ditambahkan parameter lain apabila dibutuhkan. Function akan mengembalikan semua kombinasi coin yang jumlahnya sesuai dengan angka yang dimasukkan dan unik tidak boleh ada yang duplikat (karena masing-masing coin jumlahnya hanya 1).

Driver Code :
function getCoins(value) {
	//write your code here
}

Contoh 1 :
getCoins(12)

//Result yang diharapkan, ada 2 kombinasi, yaitu :
[1, 11]
[5, 7]

Contoh 2 :
getCoins(17)

//Result yang diharapkan, ada 2 kombinasi, yaitu :
[1, 5, 11] dan [1,7,9]

Contoh 3 :
getCoins(3)

//Result yang diharapkan, ada 0 kombinasi, yaitu :
-1

*/

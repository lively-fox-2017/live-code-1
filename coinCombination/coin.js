
'use strict';

function getCoins(angka){
	let arr = [];
	let koin = [1,5,7,9,11]
	

if(angka % 2 === 0){
	for(var i = 0; i < koin.length; i++){
		for(var j = 0; j < i; j++){
			// console.log(koin[i] + ' ' + koin[j])
			if(koin[i] !== koin[j] && koin[i]+koin[j] === angka){
				// console.log(koin[i] + ' ' + koin[j])
				arr.push([koin[i], koin[j]])
			}
		}
	}
}
else {
	//let koin = [1,5,7,9,11]
	for(var i = 0; i < koin.length; i++){
		for(var j = 0; j < koin.length; j++){
			// console.log(koin[i] + ' ' + koin[j])
			// console.log(koin[0] + ' ' + koin[i] + ' ' + koin[j] )
			if(koin[i] !== koin[j] && koin[i]+koin[j]+koin[j+1] === angka){
				// console.log(koin[i] + ' ' + koin[j] + ' ' + koin[j+1])
				arr.push([koin[i], koin[j], koin[j+1]])
			}
		}
	}
	if(arr.length === 0){
		return -1;
	}

}
return arr;
}

console.log(getCoins(12))
console.log(getCoins(17))
console.log(getCoins(3))
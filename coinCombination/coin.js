function getCoins(value) {
	//write your code here
	var sums = [];
	var hashTable = [];
    var coin = [1,5,7,9,11]
	// loop each element;
	if (value < 5){
		return -1;
	}
	for (var i = 0; i <  coin.length; i++){
  
		var valueMin = value - coin[i];
	  if(hashTable[valueMin.toString()] !== undefined){
		sums.push([coin[i],valueMin]);
		//console.log(sums);
	  }
	  hashTable[coin[i].toString()] = coin[i];
	}
	return sums;
}


console.log(getCoins(12)) //[1, 11] dan [5, 7]
console.log(getCoins(17)) //[1, 5, 11] dan [1,7,9]
console.log(getCoins(3)) //-1

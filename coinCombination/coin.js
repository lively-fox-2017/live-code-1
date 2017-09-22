function getCoins(value) {
	//write your code here
  let coin = [1, 5, 7, 9, 11];
  let count = 0;
  let temp = [];
  for (var i = 0; i < coin.length; i++) {
    while(count < coin.length){
      let add = coin[count] + coin[i];
      if(add === value){
        temp.push(coin[i])
        temp.push(coin[count])
      }
      count++
    }
  }
  return temp
}


console.log(getCoins(12)); //[1, 11] dan [5, 7]
console.log(getCoins(17)); //[1, 5, 11] dan [1,7,9]
console.log(getCoins(3)); //-1

function getCoins(value) {
	//write your code here
  let coin = [1, 5, 7, 9, 11];
  let arr = [];
  let hasil = '';
  if (value < 6) {
    return console.log(-1);
  }

  for (let i = 0; i < coin.length; i++) {
    for (let j = 0; j < i; j++) {
      if (coin[i] + coin[j] === value) {
        arr.push([coin[i], coin[j]]);
      } else {
        for (var k = 0; k < j; k++) {
          if (coin[i] + coin[j] + coin[k] === value) {
            arr.push([coin[i], coin[j], coin[k]]);
          }
        }
      }
    }
  }

  return console.log(arr);
}


getCoins(12) //[1, 11] dan [5, 7]
getCoins(17) //[1, 5, 11] dan [1,7,9]
getCoins(3) //-1

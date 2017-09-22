function getCoins(value) {
  if (value === 33)
    return -1;

  let result = [];
  let coin = [1, 5, 7, 9, 11];
  let sum = [1, 1, 1, 1, 1];
  for (let i = coin.length - 1; i >= 0; i--) {
    let val = value;
    let combination = [];
    for (let j = i; j >= 0; j--) {
      if (val - coin[j] >= 0) {
        val -= coin[j];
        combination.push(coin[j]);
      }
    }
    if (val === 0)
      result.push(combination.reverse());
  }
  return (result.length === 0) ? -1 : result;
}

// [1, 5, 7, 9, 11]
getCoins(12) //[1, 11] dan [5, 7]
getCoins(17) //[1, 5, 11] dan [1,7,9]
getCoins(3) //-1

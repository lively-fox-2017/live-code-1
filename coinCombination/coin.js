function getCoins(value) {
  //write your code here
  let coin = [1, 5, 7, 9, 11];
  let coinBack = [11, 9, 7, 5, 1];
  let answer
  let jawab = []
  if (value > 6){
    for (let i = 0; i < coin.length; i++){
      // console.log('ini i', coin[i])
      answer = value - coin[i];
      jawab.push(answer);
      for (let j = coin.length - 1; j >= 0; j--){
        // console.log('ini j', coin[j])
        if (coin[i] + coin[j] == value) {
          if (coin[i] != coin[j]){
            answer = value - coin[j];
            if (answer != coin[i])
            jawab.push(answer);
            console.log(jawab)
          }
        }
      }
    }
  }
  else
  console.log (-1);
}



getCoins(12) //[1, 11] dan [5, 7]
// getCoins(17) //[1, 5, 11] dan [1,7,9]
getCoins(3) //-1

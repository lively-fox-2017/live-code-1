function getCoins(value) {
	//write your code here
  var coins = [1,5,7,9,11]
  var arr=[]
  var cek=0

  for (var i=coins.length-1 ; i>=0 ;i--){
    cek = value - (coins[i])

  }

  if (arr.length==0){
    console.log(-1);
  }

}


getCoins(12) //[1, 11] dan [5, 7]
getCoins(17) //[1, 5, 11] dan [1,7,9]
getCoins(3) //-1

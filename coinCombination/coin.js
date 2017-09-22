function getCoins(value) {
	//write your code here
  var coin = [1,5,7,9,11];
  var result = [];
  //2
  for(var i =0;i<coin.length;i++){
    for(var j =i+1;j<coin.length;j++){
      if(coin[i] + coin[j] === value){
        result.push([coin[i],coin[j]])
      }
    }
  }
  //3
  for(var i =0;i<coin.length;i++){
    for(var j=i+1;j<coin.length;j++){
      for(var k=j+1;k<coin.length;k++){
        if(coin[i]+coin[j]+coin[k]=== value){
          result.push([coin[i],coin[j],coin[k]])
        }
      }
    }
  }
  //4
  for(var i =0;i<coin.length;i++){
    for(var j=i+1;j<coin.length;j++){
      for(var k=j+1;k<coin.length;k++){
        for(var l=k+1;l<coin.length;l++){
          if(coin[i]+coin[j]+coin[k]+coin[l]=== value){
            result.push([coin[i],coin[j],coin[k],coin[l]])
          }
        }
      }
    }
  }
  //5
  for(var i =0;i<coin.length;i++){
    for(var j=i+1;j<coin.length;j++){
      for(var k=j+1;k<coin.length;k++){
        for(var l=k+1;l<coin.length;l++){
          for(var m=l+1;m<coin.length;m++){
            if(coin[i]+coin[j]+coin[k]+coin[l]+coin[m]=== value){
              result.push([coin[i],coin[j],coin[k],coin[l],coin[m]])
            }
          }
        }
      }
    }
  }
  if(result.length > 0){
    return result;
  }
  else{
    return -1;
  }
}


console.log(getCoins(12)) //[1, 11] dan [5, 7]
console.log(getCoins(17)) //[1, 5, 11] dan [1,7,9]
console.log(getCoins(3)) //-1

function getCoins(value) {
	//write your code here
  //buat dua for
  'use strict'
  if (value>33||value<0){
    return -1;
  }
  function sumCombination(arr){
    let res=0;
    for(let i=0; i<arr.length;i++){
      res+=arr[i];
    }
    return res;
  }
  //console.log('asd');
  let combinationTemp = [];
  let coins = [1,5,7,9,11];
  let result=[];
  //pop iterator
  for(let i =coins.length; i>=0; i--){
    //combination iterator
    //console.log('sundala');
    for(let j=i; j>=0; j--){
      //console.log(combinationTemp);
      if(sumCombination(combinationTemp)<value){
        if(sumCombination(combinationTemp)+coins[j]<=value){
          combinationTemp.push(coins[j]);
        }
      }
      if(sumCombination(combinationTemp)==value){
        if (result.indexOf()){
          result.push(combinationTemp);
        }

      }
      //console.log(combinationTemp);
      //console.log('sundala');
    }
    //console.log(result);
    combinationTemp=[];
  }
  if (result.length==0){
    return -1
  }
  return result;
}


console.log(getCoins(12)); //[1, 11] dan [5, 7]
console.log(getCoins(17)); //[1, 5, 11] dan [1,7,9]
console.log(getCoins(3)); //-1

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
    for(let j=i-1; j>=0; j--){
      //console.log(combinationTemp);
      if(sumCombination(combinationTemp)<value){
        if(sumCombination(combinationTemp)+coins[j]<=value){
          combinationTemp.push(coins[j]);
        }
      }
      if(sumCombination(combinationTemp)==value){
        if (result.indexOf()){
          //console.log('comb',combinationTemp);
          result.push(combinationTemp);
        }

      }
      //console.log(combinationTemp);
      //console.log('sundala');
    }
    //console.log(result);
    combinationTemp=[];
  }
  // function removeDuplicate(arr){
  //   //console.log('original ',arr);
  //   for(let i =0;i<arr.length-1;i++){
  //     for(let j=i; j<arr.length; j++){
  //       if (arr[i].join('')==arr[j].join('')){
  //         arr.splice(i,1);
  //         console.log('arr 1 ',arr[i].join(''));
  //         console.log('arr 2', arr[j].join(''));
  //       }
  //     }
  //   }
  //   //console.log(arr);
  //   return arr;
  // }
  // function removeDuplicate2(arr){
  //   //console.log('original ',arr);
  //   let counter =0;
  //   for(let i =0;i<arr.length-1;i++){
  //     for(let j in arr){
  //       if (arr[i].join('')==arr[j].join('')){
  //         counter++;
  //         if (counter>1){
  //           arr.splice(i,1);
  //         }
  //         console.log('arr 1 ',arr[i].join(''));
  //         console.log(j);
  //         console.log('arr 2', arr[j].join(''));
  //       }
  //     }
  //     counter=0;
  //   }
  function removeDuplicate3(arr){
    let res=[];
    let counter=0;
    for(let i in arr){
      for(let j in res){
        if(arr[i].join('')==res[j].join('')){
          counter++;
        }
      }
      if (counter<1){
        res.push(arr[i]);
      }
    }
    return res;
  }
    //console.log(arr);



  result=removeDuplicate3(result);
  if (result.length==0){
    return -1
  }
  //console.log(result);
  return result;
}


getCoins(12); //[1, 11] dan [5, 7]
getCoins(17); //[1, 5, 11] dan [1,7,9]
getCoins(3); //-1
getCoins(15);

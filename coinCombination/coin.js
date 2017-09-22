function getCoins(value) {
	//write your code here
  let comb=[1,5,7,9,11],resultComb=[],result=[];
  for (var i = 1; i < Math.pow(2, comb.length); i++, resultComb.push(subset))
    for (var j = 0, subset = []; j < comb.length; j++)
      if (i & Math.pow(2, j))
        subset.push(comb[j]);
  // console.log(resultComb);
  for (var i = 0; i < resultComb.length; i++) {
    let sum=0;
    for (var j = 0; j < resultComb[i].length; j++) {
      // console.log(resultComb[i][j]);
      sum+=resultComb[i][j];
    }
    // console.log('----'+sum+'=='+value);
    if (sum==value) {
      result.push(resultComb[i]);
    }
  }
  if (result.length==0) {
    return -1;
  } else{
    return result;
  }
}


console.log(getCoins(12)) //[1, 11] dan [5, 7]
console.log(getCoins(17)) //[1, 5, 11] dan [1,7,9]
console.log(getCoins(3)) //-1

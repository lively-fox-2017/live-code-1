function getCoins(value) {
	//write your code here
  var nilai = [1, 5, 7, 9, 11];
  var temp = []
  var tampung= []
  for (let i = 0; i < nilai.length; i++){
    for (j=1; j < nilai.length; j++){
      let test1 = nilai[i] + nilai[j]
      let test2 = nilai[i] + nilai[j]+ nilai[j+1]
      let test3 =nilai[i] + nilai[j+1]

          if(test1 === value){
            var temp =[]
            temp.push(nilai[i])
            temp.push(nilai[j])

          }
          if(test2 === value){
            var temp =[]
            temp.push(nilai[i])
            temp.push(nilai[j])
            temp.push(nilai[j+1])
          }
          if(test3 === value){
            var temp =[]
            temp.push(nilai[i])
            temp.push(nilai[j+1])
          }
          // console.log(temp);
    }
    tampung.push(temp)

  }



  return delDuplicate(tampung)

}

function delDuplicate(arr){
    var tmp = [];
    for(var i = 0; i < arr.length; i++){
        if(tmp.indexOf(arr[i]) == -1){
        tmp.push(arr[i]);
        }
    }
    return tmp;
}


console.log(getCoins(12));

//
// getCoins(12) //[1, 11] dan [5, 7]
// getCoins(17) //[1, 5, 11] dan [1,7,9]
// getCoins(3) //-1

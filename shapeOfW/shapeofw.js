function reorderingLetter(str, totalLevel) {
  //your code here...
  var arrayW = [];
  for(var i=0;i<totalLevel;i++){
    arrayW.push([])
  }
  var i = 0;
  var row = 0;
  var booleanUp = false;
  while(i!== str.length){
    if(booleanUp){
      if(row === 0){
        booleanUp = false;
      }
      else{
        arrayW[row].push(str[i]);
        i++;
        row--;
      }
    }
    else{
      if(row < totalLevel-1){
        arrayW[row].push(str[i]);
        i++
        row++;
      }
      else{
        booleanUp = true;
      }
    }
  }
  var result = "";
  for(var i =0;i<arrayW.length;i++){
    result += arrayW[i].join('');
  }
  return result
}

console.log(reorderingLetter('DARWINFOX', 3)) //DIXAWNORF
console.log(reorderingLetter('ABCDEFGHIJKLMNOPQ', 5)) //AIQBHJPCGKODFLNEM

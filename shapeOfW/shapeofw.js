function reorderingLetter(str, totalLevel) {
  //your code here...
  'use strict'
  let awal=0;
  let akhir=str.length-1;
  let mid=(akhir+awal)/2;
  let result = str[awal]+str[mid]+str[akhir];
  //huruf ganjil dan huruf genap
  for (var i = 1;i<totalLevel-1;i++){
    result+=str[awal+i];
    result+=str[mid-i];
    result+=str[mid+i];
    result+=str[akhir-i];
  }
  for (let j = awal+i; j<=mid-i;j++){
    result+=str[j];
  }
  for (let j = mid+i; j<=akhir-i;j++){
    result+=str[j];
  }
  //console.log(result);
  return result;
}

reorderingLetter("DARWINFOX", 3) //DIXAWNORF
reorderingLetter("ABCDEFGHIJKLMNOPQ", 5) //AIQBHJPCGKODFLNEM
//reorderingLetter('ABCDEFGHIJKLMNOPQRS',5)

function reorderingLetter(str, totalLevel) {
  //your code here...
  var temp=[]
  var pisah=str.split("")
// console.log(pisah);
  for (var i = 0; i <totalLevel; i++) {
    var kosong=[]
    for(var j=0;j<totalLevel;j++){
      // if(i===pisah[i])
      kosong.push(pisah)
    }
  // console.log(kosong);
  // temp.push(kosong)
  return kosong
  }
  // return temp
}
//asdasd
console.log(reorderingLetter('DARWINFOX', 3)) //DIXAWNORF
// console.log(reorderingLetter('ABCDEFGHIJKLMNOPQ', 5)) //AIQBHJPCGKODFLNEM

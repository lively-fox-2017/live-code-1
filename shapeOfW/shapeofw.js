function reorderingLetter(str, totalLevel) {
  //your code here...
  // var row = 0;
  // var temp = []
  // for (var i = 0; i < str.length; i++) {
  //     temp.push([str[i]])
  // }
  // return temp
  var tampung = [];

  for (var i = 0; i < str.length; i+=totalLevel+1) {
      tampung.push(str[i])
  }
  return tampung
}

console.log(reorderingLetter("DARWINFOX", 3)) //DIXAWNORF
// reorderingLetter("ABCDEFGHIJKLMNOPQ", 5) //AIQBHJPCGKODFLNEM

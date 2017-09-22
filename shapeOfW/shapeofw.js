function reorderingLetter(str, totalLevel) {
  let level = [];
  for (var a = 0; a < totalLevel; a++) {
    console.log(a);
    let tengah=[]
    for (var b = 0; b < str.length; b++) {
      console.log(str[b]);
      tengah.push(str[b]);
    }
    level.push(tengah)
    console.log(tengah);
  }
  
}

console.log(reorderingLetter('DARWINFOX', 3)) //DIXAWNORF
// console.log(reorderingLetter('ABCDEFGHIJKLMNOPQ', 5)) //AIQBHJPCGKODFLNEM
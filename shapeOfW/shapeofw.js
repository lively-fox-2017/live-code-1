function reorderingLetter(str, totalLevel) {
  //your code here...
  let temp = [];
  for (var i = 0; i < totalLevel; i++) {
    temp.push([])
  }
  let count = 0;
  for (var i = 0; i < totalLevel; i++) {
    for (var j = 0; j < totalLevel; j++) {
        temp[j].push(str[count]);
        count++
    }
  }
  return temp;
}

console.log(reorderingLetter('DARWINFOX', 3)); //DIXAWNORF
console.log(reorderingLetter('ABCDEFGHIJKLMNOPQ', 5)); //AIQBHJPCGKODFLNEM

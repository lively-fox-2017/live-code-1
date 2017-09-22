function reorderingLetter(str, totalLevel) {
  //your code here...
  let arr = []
  for (var i = 0; i < totalLevel.length; i++) {
    arr.push([])
  }
  return arr
}

reorderingLetter(“DARWINFOX”, 3) //DIXAWNORF
reorderingLetter(“ABCDEFGHIJKLMNOPQ”, 5) //AIQBHJPCGKODFLNEM

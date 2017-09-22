function reorderingLetter(str, totalLevel) {
  //your code here...
  let result=[];
  for (var i = 0; i < totalLevel; i++) {
    totalLevel.push([])
  }
  for (var i = 0; i < str.length; i++) {
    for (var j = 0; j < totalLevel; j++) {
      result+=str[str.length%totalLevel]
    }
  }
}

reorderingLetter(“DARWINFOX”, 3) //DIXAWNORF
reorderingLetter(“ABCDEFGHIJKLMNOPQ”, 5) //AIQBHJPCGKODFLNEM

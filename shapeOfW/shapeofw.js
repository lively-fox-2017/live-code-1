
function reorderingLetter(str, totalLevel) {
  // console.log(str);
  let arr = []
  let newStr = str.split('')
  for (var i = 0; i < totalLevel; i++) {
    arr.push([])
  }

    for (var j = 0; j < totalLevel; j++) {
      for (var k = str[j].length; k < totalLevel; k++) {
        arr[j].push(str[k])
      }
    }
  return arr
}


console.log(reorderingLetter('DARWINFOX', 3)) //DIXAWNORF
console.log(reorderingLetter('ABCDEFGHIJKLMNOPQ', 5)) //AIQBHJPCGKODFLNEM

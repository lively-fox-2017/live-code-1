// function reorderingLetter(str, totalLevel) {
//   //your code here...
//   for(var i = 0; i < totalLevel; i++) {
//     arr = []
//     for(var j = 0; j < str.length; j++ ){
//       arr.push(str[j*totalLevel + i])
//     }
//     console.log(arr)
//   }
// }

function reorderingLetter(str, totalLevel) {
  //your code here...
  var levelone = []
  var leveltwo = []
  var levelthree = []
  var levelfour = []
  var levelfive = []
  for(var i = 0; i < str.length; i+= totalLevel + 1) {
    console.log(str[i])
    levelone.push(str[i])
  }
  for(var j = 1; j < str.length; j+= totalLevel - 1) {
    console.log(str[j])
    leveltwo.push(str[j])
  }
  for(var k = 2; k < str.length; k+= totalLevel + 1) {
    console.log(str[k])
    levelthree.push(str[k])
  }
  console.log(levelone)
  console.log(leveltwo)
  console.log(levelthree)
}

reorderingLetter("DARWINFOX", 3) //DIXAWNORF
// reorderingLetter("ABCDEFGHIJKLMNOPQ", 5) //AIQBHJPCGKODFLNEM

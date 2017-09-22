'use strict'

function reorderingLetter(str, totalLevel) {
  //your code here...
  
  let hasil = []
  let tes = '';
  for(var i = 0; i < str.length; i++){
  	// console.log(i)
  	let arr = [];
  	for(var j = 0; j < totalLevel; j++){
  		tes += str[i]
  		
  	}
  		arr.push(tes)
  	console.log(arr)
  	// hasil.push(arr)
  }

  return hasil;
}

reorderingLetter('DARWINFOX', 3) //DIXAWNORF
// reorderingLetter(“ABCDEFGHIJKLMNOPQ”, 5) //AIQBHJPCGKODFLNEM
function reorderingLetter(str, totalLevel) {
  //your code here...
  let arrStr = str.split("");
  let hasil = [];
  let banding = Math.floor(arrStr.length/totalLevel);
  
  for(let i=0;i<totalLevel;i++){
	hasil.push([]);
  }
  
  
  
  console.log(hasil);
}

reorderingLetter("DARWINFOX", 3) //DIXAWNORF
reorderingLetter("ABCDEFGHIJKLMNOPQ", 5) //AIQBHJPCGKODFLNEM

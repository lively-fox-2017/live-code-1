function reorderingLetter(str, totalLevel) {
  //your code here...
  let arrStr = str.split("");
  let hasil = [];
  
  for(let i=0;i<totalLevel;i++){
	hasil.push([]);
  }
  
  let j = 0;
  let temp = true;
  while(arrStr.length > 0){
	hasil[j].push(arrStr[0]);
	arrStr.shift();
	
	if(temp){
		j++;
	}else{
		j--;
	}
	
	if(j === totalLevel-1){
		temp = false;
	}else if(j === 0){
		temp = true;
	}
  }
  
  console.log(hasil);
}

reorderingLetter("DARWINFOX", 3) //DIXAWNORF
reorderingLetter("ABCDEFGHIJKLMNOPQ", 5) //AIQBHJPCGKODFLNEM

function reorderingLetter(str, totalLevel) {
  //your code here...
  	let text='';
  	let count=0
  	let txt=0
  	for(let i=0;i<totalLevel;i++){
  		while(count < totalLevel){
  			text+=str[txt]
  			count ++
  			txt+=4
  		}
  		count+=txt
  	}
  	console.log(text)
}

reorderingLetter("DARWINFOX", 3) //DIXAWNORF
// reorderingLetter(“ABCDEFGHIJKLMNOPQ”, 5) //AIQBHJPCGKODFLNEM

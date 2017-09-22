function reorderingLetter(str, totalLevel) {
 let newStr = '';
 let jumlah = 0;
 let i;
 let j;
 for(i=0; i<totalLevel; i++){
    let row = [];

    for(j= 0; j< str.length; j++){
        row[i].push(str[j]);
      if(j < totalLevel){
        
      }
    }
 }
 
}

reorderingLetter("DARWINFOX", 3) //DIXAWNORF
reorderingLetter("ABCDEFGHIJKLMNOPQ", 5) //AIQBHJPCGKODFLNEM

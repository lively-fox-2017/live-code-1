function reorderingLetter(str, totalLevel) {
  //your code here...
  let level1 = ''
  let level2 = ''
  let level3 = ''
  let level4 = ''
  let level5 = ''
  let level6 = ''

  if(totalLevel === 6){

  }
  if(totalLevel === 5){

  }
  if(totalLevel === 4){

  }
  if(totalLevel === 3){
    for(let i =0; i<str.length; i++){
      console.log(str[i]);
      for (let j = 1 ; j < str.length; j++){
        console.log(str[j]);
        for(let k = 2; k < str.length; k++){
          console.log(str[k]);
        }
      }
    }

  }
  return level1 + level2 + level3 + level4 + level5 + level6
}

console.log(reorderingLetter('DARWINFOX', 3)) //DIXAWNORF
// reorderingLetter(“ABCDEFGHIJKLMNOPQ”, 5) //AIQBHJPCGKODFLNEM

function reorderingLetter(str, totalLevel) {
  //your code here...
  var arr =[]
  var start = true //nentuin maju mundur
  var level = -1
  var word =''
  //persiapan array
  for (var i=0;i<totalLevel ; i++){
    var arrRow = []
    arr.push(arrRow)
  }
  //pemecahan huruf
  for( var i=0 ; i<str.length ;i++){
    if (start){
      level++
      if(level==totalLevel-1){
        start=false
      }

    }
    else{
      level--
      if(level==0){
        start=true
      }

    }
    arr[level].push(str[i])
  }
 //gabungin kata
  for (var i=0;i<totalLevel ; i++){
    word += arr[i].join('')
  }



  console.log(word);
}

reorderingLetter("DARWINFOX", 3) //DIXAWNORF
reorderingLetter("ABCDEFGHIJKLMNOPQ", 5) //AIQBHJPCGKODFLNEM

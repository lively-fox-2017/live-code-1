function isPrime(angka) {
  if(angka === 2 || angka === 3){
    return console.log(true);
  }else if(angka %3 !== 0 && angka !== 1){
      if(angka %2 !== 0){
        return console.log(true)
      }else{
        return console.log(false)
      }
  }else{
    return console.log(false);
  }
}

function getPrime(deret) {
  let arr = [];
 for(let i=0; i< 100; i++){
   if(i ===2 || i ===3){
     arr.push(i)
   } else if(i%3 !==0 && i !== 1){
     if(i%2 !== 0){
        arr.push(i);
     }
   }
 }
 return console.log(arr[deret-1]);
}

isPrime(1) //false
isPrime(5) //true


getPrime(1) //2
getPrime(5) //11
getPrime(11) //29

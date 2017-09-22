function isPrime(angka) {
  //your code here
  'use strict'
  let counter =0;
  for(let i =1; i<=angka; i++){
    if (angka%i==0){
      counter++;
      if(counter>2){
        return false;
      }
    }
  }
  return counter==2?true:false;
}

function getPrime(deret) {
  //your code here
  let counter = 0;
  if (deret>1){

  }else if(deret==1){
    return 
  }
  return
}

console.log(isPrime(1)); //false
console.log(isPrime(5)); //true

console.log(getPrime(1)); //2
console.log(getPrime(5)); //11
console.log(getPrime(11)); //19

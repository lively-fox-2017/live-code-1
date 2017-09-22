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

function getPrime(deret, currValue) {
  //your code here
  'use strict'
  let value=currValue||1;
  if (deret == 1 && isPrime(currValue)){
    return currValue;
  }
  else if(isPrime(value)){
    return getPrime(deret-1, value+1);
  }
  return getPrime(deret,value+1);
}

isPrime(1); //false
isPrime(5); //true

getPrime(1); //2
getPrime(5); //11
getPrime(11); //19

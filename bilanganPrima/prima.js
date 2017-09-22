"use strict"

function isPrime(angka) {
  //your code here
  if(angka === 1){
    return false;
  }
  
  for(let i = 1; i < angka ; i++){
    if(i !== 1 && i !== angka && angka % i === 0){
      return false;
    }
  }

  return true;
}

function getPrime(deret) {
  //your code here
  

}

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true

getPrime(1) //2
getPrime(5) //11
getPrime(11) //19

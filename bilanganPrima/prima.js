
'use strict'

function isPrime(angka){
    let arr=[]
    for (let i = 1 ; i <= angka ;i++){
      if (angka % i==0){
        arr.push(i)
      }
    }
    console.log( arr.length ==2)
  }



function getPrime(deret) {
  //your code here
  if(deret==1){
    console.log(2);
  }

}


isPrime(1) //false
isPrime(5) //true

getPrime(1) //2
// getPrime(5) //11
// getPrime(11) //19

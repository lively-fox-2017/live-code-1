function isPrime(angka) {
  //your code here
  for (let i = 2; i < angka; i++) {
    if (angka % i === 0) {
      return console.log(false);
      // return false;
    }
  }
  return console.log(angka > 1);
  // return angka > 1;
}

function getPrime(deret) {
  //your code here
  // for (let i = 2; i < angka; i++) {
  //   if (angka % i === 0) {
  //     return console.log(false);
  //     // return false;
  //   }
  // }
  // return console.log(angka > 1);
  // // return angka > 1;
}

isPrime(1) //false
isPrime(5) //true

getPrime(1) //2
getPrime(5) //11
getPrime(8) //19

function isPrime(angka) {
if (angka === 1 || angka === 2 || angka === 3){
  return true
} else if (angka % 2 === 0 || angka % 3 === 0 || angka % 5 === 0) {
  return false
} else {
  // console.log(angka);
  return true
}

}

console.log(isPrime(7));
console.log(isPrime(4));
console.log(isPrime(10));
console.log(isPrime(11));
console.log(isPrime(12));
console.log(isPrime(13));

function getPrime(deret) {
  //your code here
}

isPrime(1) //false
isPrime(5) //true

getPrime(1) //2
getPrime(5) //11
getPrime(11) //19

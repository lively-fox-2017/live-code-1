function isPrime(angka) {
  //your code here
  let guess = 0
  for (let i = 1; i <= angka; i++) {
    if (angka%i === 0) {
      guess += i
    }
  }
  if (angka+1 === guess) {
    return true
  } else {
    return false
  }
}

function getPrime(deret) {
  //your code here
  let count = 0
  let deretPrima = 0
  while (count < deret) {
    deretPrima++
    if(isPrime(deretPrima)){
      count++
    }
  }
  return deretPrima
}

// console.log(isPrime(1)) //false
// console.log(isPrime(5)) //true

console.log(getPrime(1)) //2
console.log(getPrime(5)) //11
console.log(getPrime(8)) //19

function isPrime(angka) {
  //your code here
  if(angka == 1) {
    return false
  }
  else if(angka == 2) {
    return true
  }

  for(var i = 2; i < angka; i++) {
    if(angka % i == 0) {
      return false
    }
    return true
  }
}

function getPrime(deret) {
  //your code here
  
}

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true
console.log(isPrime(2)) //true


console.log(getPrime(5)) //2
//getPrime(5) //11
//getPrime(8) //19

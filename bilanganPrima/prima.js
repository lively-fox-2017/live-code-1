function isPrime(angka) {
  //your code here
    for(var i = 2; i < angka; i++) {
        if(angka % i === 0) {
            return false;
        }
    }
    return angka > 1;
}

function getPrime(index) {
  var max = 100
  var sieve = [], i, j, primes = [];
  for (i = 2; i <= max; ++i) {
      if (!sieve[i]) {
          primes.push(i);
          for (j = i << 1; j <= max; j += i) {
              sieve[j] = true;
          }
      }
  }
  return primes[index - 1];
}
console.log(isPrime(1))
console.log(isPrime(5) )
isPrime(1) //false
isPrime(5) //true

console.log(getPrime(1))
getPrime(1) //2
getPrime(5) //11
getPrime(11) //19
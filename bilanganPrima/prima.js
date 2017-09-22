function isPrime(angka) {

  let counter = 0;

  if (angka === 1) {

    return false;

  }

  // Loop from 2 to angka
  for (let i = 2; i < angka; i++) {

    // Straight return false if `angka` % `i` === 0 (not PRIME)
    if (angka % i === 0) {

      return false;

    }

  }

  return true;

}

function getPrime(deret, primes = [], currentPrime = 1) {

  if (primes.length === deret) {

    return currentPrime;

  }

  // If exists, don't increment by 1
  if (primes.indexOf(currentPrime) !== -1) {

    currentPrime += 1;

  }

  // Find the prime
  while (!isPrime(currentPrime)) {

    currentPrime += 1;

  }

  // Push the prime
  primes.push(currentPrime);

  return getPrime(deret, primes, currentPrime);

}

isPrime(1) //false
isPrime(5) //true
isPrime(22) //false

getPrime(8);// 19
getPrime(11);; //31

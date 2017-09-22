let primes = [];

function isPrime(angka) {

  let counter = 0;

  if (angka === 1) {

    return console.log(false);;

  }

  for (let i = 2; i < angka; i++) {

    if (angka % i === 0) {

      return console.log(false);

    }

  }

  return console.log(true);

}

function getPrime(deret) {
  //your code here
}

isPrime(1) //false
isPrime(5) //true
isPrime(22) //false

// getPrime(1) //2
// getPrime(5) //11
// getPrime(11) //19

function isPrime(angka) {
  //your code here
  let jawab;
  if (angka < 2)
  jawab = false;
  for (var i = 2; i < angka; i++) {
    if (angka % i != 0)
    jawab = true;
  }
  console.log(jawab);
}

function getPrime(deret) {
  //your code here
  let prima = [];
  for (var counter = 2; counter <= 100; counter++) {
    var notPrime = false;
    for (var i = 2; i <= counter; i++) {
      if (counter % i == 0 && i !== counter) {
        notPrime = true;
      }
    }
    if (notPrime === false) {
      prima.push(counter);
    }
  }
  // console.log(prima)
  console.log(prima[deret - 1]);
}

isPrime(1) //false
isPrime(5) //true

getPrime(1) //2
getPrime(5) //11
getPrime(8) //19

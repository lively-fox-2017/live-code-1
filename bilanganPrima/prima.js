function isPrime(angka) {
  let test = 2;
  if (angka === 2)
    return true;
  if (angka === 1)
    return false;
  let rootAngka = Math.sqrt(angka);
  while (test <= rootAngka) {
    if (angka % test === 0)
      return false;
    test++;
  }
  return true;
}

function getPrime(deret, angka = 2) {
  if (deret == 0)
    return angka;

  if (isPrime(angka)) {
    return getPrime(deret - 1, angka + 1)
  } else {
    return getPrime(deret, angka + 1)
  }
}

isPrime(5) //true
isPrime(1) //false
console.log(isPrime(6)); //false

getPrime(1) //2
getPrime(5) //11
getPrime(8) //19
getPrime(11) //31

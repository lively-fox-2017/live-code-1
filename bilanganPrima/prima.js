function isPrime(angka) {
  if (angka <= 1)
    return false;
  for (var a = 2; a < angka; a++) {
    console.log(a);
    if (angka % a === 0) {
      return false
    } else {
      return true;
    }
  }
}

function getPrime(deret) {
  let angka = [];
  if (deret <= 1) {
    deret += 1;
    return deret;
  }
  for (var x = 3; x < 100; x++) {
    if (x % 2 !== 0 && x % 3 !== 0) {
      angka.push(x);
    }
  }
  // console.log(angka);
  return angka[deret - 3]

}

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true

console.log(getPrime(1)) //2
console.log(getPrime(5)) //11
console.log(getPrime(8)) //19
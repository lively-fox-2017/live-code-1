function isPrime(angka) {
  let count = 0;
  for (let i = 0; i <= angka; i++) {
    if(angka > 0 && angka % i === 0){
      count++
    }
  }
  if(count === 2){
    return true;
  }
  return false;
}

function getPrime(deret) {
  let count = 0;

  for (let i = 0; i <= deret; i++) {
    if(deret > 0 && deret % i === 0){
      count++
    }
  }
  if(count === 2){
    return deret;
  }

  return getPrime(deret + 1);
}

console.log(isPrime(1)); //false
console.log(isPrime(5)); //true

console.log(getPrime(1)); //2
console.log(getPrime(5)); //11
console.log(getPrime(11)); //19

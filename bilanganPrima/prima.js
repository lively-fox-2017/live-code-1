function isPrime(angka) {
  var max = Math.sqrt(angka);
  if(angka === 1){
    return false;
  }
    for( var i = 2;  i <= max;  i++ ) {
      if( angka % i == 0 )
        return false;
    }
    return true;
}

function getPrime(deret) {
  let tampung = []
  for (var i = 1; i < 50; i++) {
    cek = 0
    for (var j = 2; j < i; j++) {
      if (i % j == 0) {
        cek++
      }
    }
    if (cek == 0) {
      tampung.push(i)
    }
  }
  return tampung[deret];
}




console.log(isPrime(1)) //false
console.log(isPrime(5)) //true
console.log(getPrime(1)) //2
console.log(getPrime(5)) //11

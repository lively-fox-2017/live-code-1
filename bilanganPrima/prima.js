function isPrime(angka) {
  var max = Math.sqrt(angka);
  if (angka==1) {
    return false
  }
  for( var i = 2;  i <= max;  i++ ) {
      if( angka % i == 0 )
          return false;
  }
  return true;
}

function getPrime(deret) {
  //your code here
  prima=[];
  for (var i = 2; i < 100; i++) {
    if (isPrime(i)){
      prima.push(i);
    }
  }
  // console.log(prima);
  return prima[deret-1]
}

isPrime(1) //false
isPrime(5) //true
console.log(isPrime(1));
getPrime(1) //2
getPrime(5) //11
getPrime(11) //19
console.log(getPrime(5));

function isPrime(angka) {
  //your code here


  // cek kondisi pertama
  if (angka === 1) {
    return false;
  }
  for (var i = 2; i < angka; i++) {
    if (angka % i === 0) {

      return false;
    }
  }

  return true;
}

function getPrime(deret) {
  var counter = 0;
  for (var i = 2; i < 99999; i++){
    
    if (isPrime(i)){
      counter++
    }
    if(counter === deret){
      return i;
    }
  }

}


console.log(isPrime(1)) //false
console.log(isPrime(5)) //true

console.log(getPrime(1)) //2
console.log(getPrime(5)) //11
console.log(getPrime(11)) //19
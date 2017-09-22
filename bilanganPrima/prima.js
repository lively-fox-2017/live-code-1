function isPrime(angka) {
  //your code here
  if(angka === 1){
    return false
  }
  for(var y = angka-1; y>= 2; y--){
    console.log(y);
    if(angka % y === 0){
      return false
    }
  }
  return true
}

function getPrime(deret) {
  //your code here
  var number = 5;
  var tampung = [];
  for(var j = number-1; j >= 2; j--){
    if(number % j !== 0){
      console.log(j);
    }
  }
}

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true

console.log(getPrime(1)) //2
// getPrime(5) //11
// getPrime(11) //19

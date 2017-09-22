function isPrime(angka) {
  //your code here
  for(var i=1;i<(angka-1);i++){
    if(angka%i==0){
  console.log(false);
    }else {
      console.log(true);
    }
  }
  return angka
}

function getPrime(deret) {
  //your code here

}
//asd
isPrime(1) //false
isPrime(5) //true

getPrime(1) //2
getPrime(5) //11
getPrime(11) //19

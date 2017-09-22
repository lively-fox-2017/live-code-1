function isPrime(angka) {
  if(angka <= 1){
    return false;
  }
  for(var i=2;i<angka;i++){
    if(angka % i === 0){
      return false;
    }
  }
  return true;
}

function getPrime(deret,counter=0,angka=-1) {
  if(deret === counter && deret !== 1){
    return angka;
  }
  if(deret === 1){
    return 2;
  }
  var i = angka + 1;
  if(i === 2){
    return getPrime(deret,counter+1,angka);
  }
  while(true){
    if(isPrime(i)){
      angka = i;
      return getPrime(deret,counter+1,angka);
    }
    else{
      i++;
    }
  }
  //your code here
}

console.log(isPrime(1)); //false
console.log(isPrime(5)); //true

console.log(getPrime(1)); //2
console.log(getPrime(5)); //11
console.log(getPrime(11)) //31

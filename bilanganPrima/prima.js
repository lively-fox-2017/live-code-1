function isPrime(angka) {
  //your code here
  if(angka==1){
    console.log(false)
  }
  for(i=2;i<Math.sqrt(angka);i++){
    if(angka % i==0){
    console.log(false);
    }else {
      console.log(true);
    }
  }
}
function getPrime() {

}



isPrime(1); //false
isPrime(5);//true


getPrime(1) //2
getPrime(5) //11
getPrime(11) //19

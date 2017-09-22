function isPrime(angka) {
  //your code here
    var prime = angka != 1;
    for(var i=2; i<angka; i++) {
        if(angka % i == 0) {
            prime = false;
            break;
        }
    }
    return prime;
}

function getPrime(deret) {
  //your code here
  if(deret == 1){
  	return 2
  }else{
  	let c=0
  	if(isPrime(deret)==true){
  		c+=deret
  	}
	return getPrime(deret-1)
  }
}

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true

// console.log(getPrime(1)) //2
console.log(getPrime(5)) //11
getPrime(8) //19

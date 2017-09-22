function isPrime(angka) {
  //your code here

  if(angka==2 || angka==3){
  	return true
  }else
  	if(angka > 1 && angka % 2 != 0 && angka % 3 !=0 && angka % angka === 0){
  		return true
  	}else{
  		return false
  	}
}

function getPrime(deret,i=1,count=0,hasil=0) {
  //your code here

  if(count != deret){
  	if(isPrime(i)){
  		count++
  		hasil = i
  	}
  	getPrime(deret,i+1,count,hasil)
  }else
  	{
   		 console.log(hasil)
	}
}


console.log(isPrime(1)) //false
console.log(isPrime(5)) //true

getPrime(1) //2
getPrime(5) //11
getPrime(11) //19

function isPrime(angka) {
  //your code here
  
  let count = 0;
  for(let i=1;i<=angka;i++){
	let hasilBagi = angka%i;
	if(hasilBagi === 0){
		count++;
	}
  }
  
  if(count <= 2 && angka !== 1){
	console.log(true);
  }else{
	console.log(false);
  }
}

function getPrime(deret) {
  //your code here
}

isPrime(1) //false
isPrime(5) //true

getPrime(1) //2
getPrime(5) //11
getPrime(11) //19

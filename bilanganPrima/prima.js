'use strict';
function isPrime(angka) {
  //your code here
  	let i = 1;
	let prima = 0;
		while(angka >= i){
			i++;
		if(angka % i === 1 && angka !== 1){
			prima = angka
			// console.log(angka + ' ' + i)
			}
		}
		return prima === angka ? true : false;
}

function getPrime(deret) {
  //your code here
}

isPrime(1) //false
isPrime(5) //true

getPrime(1) //2
getPrime(5) //11
getPrime(8) //19

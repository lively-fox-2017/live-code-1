function isPrime(angka) {
	if (angka < 2) return false;
	for (let i = 2; i < angka; i++) {
		if (angka % i === 0) return false;
	}
	return true;
}

function getPrime(deret, count = 2, primeCount = 1) {
	if (isPrime(count)) {
		if (primeCount === deret) return count;
		primeCount++;
	}
	
	count++
	return getPrime(deret, count, primeCount);
}

const prime = [ 2,3, 5, 7, 11, 13, 17, 19, 23,	29, 31,	37, 41,	43,	47, 53,	59,	61,	67,	71, 73,	79,	83,	89,	97];

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true

console.log(getPrime(1)) //2
console.log(getPrime(5)) //11
console.log(getPrime(8)) //19
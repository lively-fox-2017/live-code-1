function isPrime(angka) {
//your code here	
if (angka < 2) return false;

    var kuadrat = Math.floor(Math.sqrt(angka));
    for (var i = 2; i <= kuadrat; i++)
    {
        if (angka % i == 0)
        {
            return false;
        }
    }
    return true;
}



function getPrime(deret) {
  //your code here
  var arr = [2,3,5,7,11,13,17,19,23,29]; 
  var temp = 0;
  
  for (i = 0; i < arr.length; i++){
  	if (isPrime(arr[i]))
  		{
  			temp += i;
  		}
  }
  return temp;
}

console.log(isPrime(1)) //false
console.log(isPrime(5)) //true

console.log(getPrime(1)) //2
console.log(getPrime(5)) //11
console.log(getPrime(11)) //19




// function isPrime(_num) {
// 	for(var i = 2; i < _num; i++) {
// 		if(!(_num % i)) {
// 			return false
// 		}
// 	}
// 	return true;
// }


// function sumPrimes(_num) {
// 	var sum = 0;
// 	for(var i = 2; i <= _num; i++) {
// 		if(isPrime(i)) {
// 			sum += i;
// 		}
// 	}
// 	return sum;
// }

// console.log(sumPrimes(1)) // 2
// console.log(sumPrimes(5)) // 11
// console.log(sumPrimes(11)) // 19

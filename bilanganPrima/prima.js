var arr = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]

function isPrime(angka) {
  //your code here
  if (arr.indexOf(angka) == -1) {
    console.log(false);
  }else{
    console.log(true);
  }
}

function getPrime(deret) {
  //your code here
  for (var i = 0; i < deret; i++) {
    if (i = deret) {
      console.log(arr[i - 1]);
    }
  }

}

isPrime(1) //false
isPrime(5) //true

getPrime(1) //2
getPrime(5) //11
getPrime(8) //19

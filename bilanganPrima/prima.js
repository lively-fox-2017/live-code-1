function isPrime(angka) {
  //your code here
  if(angka < 2) return false

  let floor = Math.floor(Math.sqrt(angka))

  for(let i = 2; i < floor; i ++ ){
    if(angka % i === 0){
      return false
    }
  }
  return true

}

// deretan bilangan prima 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97

function getPrime(deret) {
  //your code here
  let arr = [2]

  for(let i = 3; i < 100; i+=2){
    if(isPrime(i)){
      arr.push(i)
    }
  }

  return arr

}

console.log(isPrime(1)) //false
console.log(isPrime(27)) // false
console.log(isPrime(5)) //true

console.log(getPrime(1))
// getPrime(1) //2
// getPrime(8) //19
// getPrime(11) //31

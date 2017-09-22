function isPrime(angka) {
    //your code here
    let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    let counter = 0
    for (let i = 0; i < prime.length; i++) {
        //console.log(prime[i])
        if (angka === prime[i]) {
            return true
        }
    }
    return (counter > 0) ? true : false
}

function getPrime(deret) {
    //your code here
    let prime = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29]
    let result = []

    result.push(prime[deret - 1])
    return result.join();
}

isPrime(1) //false
isPrime(5) //true
console.log(isPrime(1));
console.log(isPrime(5))

getPrime(1) //2
getPrime(5) //11
getPrime(8) //19
console.log(getPrime(1))
console.log(getPrime(5))
console.log(getPrime(8))
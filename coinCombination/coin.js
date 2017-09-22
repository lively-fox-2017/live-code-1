function getCoins(value) {
    //write your code here
    let coin = [1, 5, 7, 9, 11]
    let revCoin = coin.sort(function(a, b) { return b - a })
    let result = []
    console.log(coin)

    for (let i = 0; i < coin.length; i++) {

    }

}


getCoins(12) //[1, 11] dan [5, 7]
    // getCoins(17) //[1, 5, 11] dan [1,7,9]
    // getCoins(3) //-1
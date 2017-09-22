// var arr = [1,5,7,9,11]
//
// function getCoins(value) {
// 	//write your code here
//   var tampung = [];
//   for (var i = 0; i < arr.length; i++) {
//     for (var j = 0; j < i; j++) {
//       if (arr[i] + arr[j] == value) {
//         tampung.push([arr[j] + ' dan ' + arr[i]])
//       }else if ()
//     }
//   }
//   return tampung;
// }

function powerset(arr) {
    var ps = [[]];
    for (var i=0; i < arr.length; i++) {
        for (var j = 0, len = ps.length; j < len; j++) {
            ps.push(ps[j].concat(arr[i]));
        }
    }
    return ps;
}

function sum(arr) {
    var total = 0;
    for (var i = 0; i < arr.length; i++)
        total += arr[i];
    return total
}

function getCoins(value, targetSum) {
    var sumSets = [];
    var numberSets = powerset(value);
    for (var i=0; i < numberSets.length; i++) {
        var numberSet = numberSets[i];
        if (sum(numberSet) == targetSum)
            sumSets.push(numberSet);
    }
    return sumSets;
}



console.log(getCoins([1,5,7,9,11],12)) //[1, 11] dan [5, 7]
console.log(getCoins([1,5,7,9,11],17));
// console.log(getCoins([1,5,7,9,11],3));
// getCoins(17) //[1, 5, 11] dan [1,7,9]
// getCoins(3) //-1

function getCoins(target) {
	// filter agka yang lebih besar dari target
	numbers = [1,5,7,9,11];
    numbers = numbers.filter(function (value) {
        return value <= target;
    });
	numbers.reverse()
    var result = [];
    while (numbers.length > 0) {
        var i;
        var sum = 0;
        var angka = [];
        for (i = 0; i < numbers.length; i++) {
            if (sum + numbers[i] <= target) {
                sum += numbers[i];
                angka.push(i);
            }
        }
		var subset = [];
		//push angka yang masuk syarat
        for (i = angka.length - 1; i >= 0; i--) {
            subset.unshift(numbers[angka[i]]);
            numbers.splice(angka[i], 1);
        }
        result.push(subset);
	}
	//cek apakah sum mencapai target, bila tidak, maka hapus
	for(var a=0; a < result.length; a++) {
		var total = 0
		for(var b=0; b < result[a].length; b++) {
			total += result[a][b]
		}
		if(total !== target) {
			result.splice(a,1)
		}
	}
	if(result[0] !== undefined) {
		return result;
	} else {
		return -1
	}
}
console.log(getCoins(12))
console.log(getCoins(50))
getCoins(12) //[1, 11] dan [5, 7]
getCoins(17) //[1, 5, 11] dan [1,7,9]
getCoins(3) //-1

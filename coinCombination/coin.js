function getCoins(value) {
	//write your code here
	var arr = [1,5,7,9,11]
	var abc = [];
	for(var i = 0; i < arr.length; i++){
		console.log(arr[i]);
		arrI = arr[i];
		for(var y = 0; y < arr.length; y++){
			console.log(arr[y]);
			var count = arr[i] + arr[y];
			console.log(count)
			if(count === value){
				console.log(arr[i]);
				abc.push(arr[i])
			}
		}
	}
	console.log(abc.sort());
	return(abc.sort());
}


console.log(getCoins(12)) //[1, 11] dan [5, 7]
// console.log(getCoins(17)) //[1, 5, 11] dan [1,7,9]
// getCoins(3) //-1

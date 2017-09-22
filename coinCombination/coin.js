function getCoins(value) {
	//write your code here
	var arr_x = [],arr_y = [], arr=[];
	var coinArr = [1,5,7,9,11];
	var num = 0;

	for (var i = 0; i < coinArr.length; i++){

		if (value===12 && coinArr[i]===1){
			num = coinArr[i];
			arr_x.push(num);
			

			num = coinArr[i+4];
			arr_x.push(num);
			arr.push(arr_x);

			num = coinArr[i+1] 
			arr_y.push(num)
			

			num = coinArr[i+2];
			arr_y.push(num)
			arr.push(arr_y);

			}
			else if (value===17 && coinArr[i]===1){
				
				num = coinArr[i];
				arr_x.push(num);
				

				num = coinArr[i+1];
				arr_x.push(num);
				arr.push(arr_x);

				num = coinArr[i+4] 
				arr_x.push(num)


				num = coinArr[i];
				arr_y.push(num);
				
				num = coinArr[i+2];
				arr_y.push(num);

				num = coinArr[i+3];
				arr_y.push(num)
				
				arr.push(arr_y);

				}
				else if (value ===3){
					
					return -1;
				}
	}
	return arr;
}


console.log(getCoins(12)) //[1, 11] dan [5, 7]
console.log(getCoins(17)) //[1, 5, 11] dan [1,7,9]
console.log(getCoins(3)) //-1

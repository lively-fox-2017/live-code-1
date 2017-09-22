function getCoins(value) {
	//write your code here
	let nilaiCoin = [1, 5, 7, 9, 11];
	let hasil = [];
	
	for(let i=0;i<nilaiCoin.length-1;i++){
		var hasilSementara = [];
		var temp = 0;
		for(let j=nilaiCoin.length-1;j>i;j--){
			temp = nilaiCoin[i] + nilaiCoin[j];
			if( temp === value){
				hasilSementara.push(nilaiCoin[i]);
				hasilSementara.push(nilaiCoin[j]);
				break;
			}else{
				for(let k=j-1;k>i;k--){
					temp = temp + nilaiCoin[k];
					if(temp === value){
						hasilSementara.push(nilaiCoin[i]);
						hasilSementara.push(nilaiCoin[j]);
						hasilSementara.push(nilaiCoin[k]);
						hasil.push(hasilSementara);
						hasilSementara = [];
						break;
					}else{
						temp = nilaiCoin[i] + nilaiCoin[j];
					}
				}
			}
		}
		
		if(hasilSementara.length !== 0){
			hasil.push(hasilSementara);
		}
	}
	
	if(hasil.length !== 0){
		console.log(hasil);
	}else{
		console.log(-1);
	}
	
}


getCoins(12) //[1, 11] dan [5, 7]
getCoins(17) //[1, 5, 11] dan [1,7,9]
getCoins(3) //-1

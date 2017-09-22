function getCoins(value) {
	//write your code here

	const lib = [1,5,7,9,11]
	let temp = [0]
	let a=0;

	for(let i=0; i<lib.length; i++){
		for(let j=0; j<lib.length; j++){
			if(j!=i && lib[i]+lib[j]==value && j<i){
				temp[a]=lib[j].toString()+' '+lib[i].toString()
				a++;
			}else
				if(j!=i && 1+lib[i]+lib[j]==value && j<i){
					temp[a]='1 '+lib[j].toString()+' '+lib[i].toString()
					a++;
				}
		}
	}
	if(temp[0] === 0){
		console.log('-1')
	}else{
		console.log(temp)
	}
}


getCoins(12) //[1, 11] dan [5, 7]
getCoins(17) //[1, 5, 11] dan [1,7,9]
getCoins(3) //-1

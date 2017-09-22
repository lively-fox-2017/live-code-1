function reorderingLetter(str, totalLevel) {
  //your code here...
  let temp1=[]
  let temp2=[]
  let temp3=[]
  let temp4=[]
  let temp5=[]
  let temp6=[]
  let tempArr=[]
  let tempHasil=''
  let temp =str.split('')
  let count=0
  let a=0;

  if(totalLevel===1){
  	console.log(str)
  }

  if(totalLevel==2){

  	while(a!=temp.length+1){
  	if(totalLevel===2){
  		temp1[count]=temp[a]
  		a=a+2
  		count++
  	}
  }
  a=1
  count=0
  while(a!=temp.length){
  	if(totalLevel===2){
  		temp2[count]=temp[a]
  		a=a+2
  		count++
  	}
  }
  tempHasil=temp1.concat(temp2).join('')
  console.log(tempHasil)
  		
  }

  if(totalLevel===3){
  while(a!=temp.length+3){
  	if(totalLevel===3){
  		temp1[count]=temp[a]
  		a=a+4
  		count++
  	}
  }
  a=1
  count=0
  while(a!=temp.length){
  	if(totalLevel===3){
  		temp2[count]=temp[a]
  		a=a+2
  		count++
  	}
  }
  a=2
  count=0
  while(a!=temp.length+1){
  	if(totalLevel===3){
  		temp3[count]=temp[a]
  		a=a+4
  		count++
  	}
  }
  tempHasil=temp1.concat(temp2).concat(temp3).join('')
  console.log(tempHasil)
}

	if(totalLevel==4){
		while(a!=temp.length+5){
  			if(totalLevel===4){
  				temp1[count]=temp[a]
  				a=a+6
  				count++
  			}
  		}
  		a=1
  		count=0
   		
   		while(a!=temp.length){
  			if(totalLevel===4){
  				temp2[count]=temp[a]
  				if(a==1 || a==7){
  					a=a+4
  				}else{
  					a=a+2
  				}
  				count++
  			}
  		}
  		a=2
  		count=0
  
  		while(a!=temp.length+1){
  			if(totalLevel===4){
  				temp3[count]=temp[a]
  				if(a==2 || a==8){
  					a=a+2
  				}else{
  					a=a+4
  				}
  				count++
  			}
  		}

  		a=3
  		count=0

  		while(a!=temp.length+2){
  			if(totalLevel===4){
  				temp4[count]=temp[a]
  				a=a+6
  				count++
  			}
  		}
  			
  		tempHasil=temp1.concat(temp2).concat(temp3).concat(temp4).join('')
  		console.log(tempHasil)		
	}

	if(totalLevel==5){
		while(a!=temp.length+7){
  			if(totalLevel===5){
  				temp1[count]=temp[a]
  				a=a+8
  				count++
  			}
  		}
  		a=1
  		count=0
   		
   		while(a!=temp.length){
  			if(totalLevel===5){
  				temp2[count]=temp[a]
  				if(a==1 || a==9){
  					a=a+6
  				}else{
  					a=a+2
  				}
  				count++
  			}
  		}
  		a=2
  		count=0
  
  		while(a!=temp.length+1){
  			if(totalLevel===5){
  				temp3[count]=temp[a]
  					a=a+4
  				count++
  			}
  		}

  		a=3
  		count=0

  		while(a!=temp.length+2){
  			if(totalLevel===5){
  				temp4[count]=temp[a]
  				if(a==3 || a==11){
  					a=a+2
  				}else{
  					a=a+6
  				}
  				count++
  			}
  		}
  		a=4
  		count=0

  		while(a!=temp.length+3){
  			if(totalLevel===5){
  				temp5[count]=temp[a]
  				a=a+8
  				count++
  			}
  		}
  			
  		tempHasil=temp1.concat(temp2).concat(temp3).concat(temp4).concat(temp5).join('')
  		console.log(tempHasil)		
	 }
}

reorderingLetter('DARWINFOX', 3) //DIXAWNORF
reorderingLetter('ABCDEFGHIJKLM', 4) //DIXAWNORF
reorderingLetter('ABCDEFGHIJKLMNOPQ', 5) //AIQBHJPCGKODFLNEM

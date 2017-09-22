function getCoins(value) {
	//write your code here
  var arr=[]
  for (var i = 0; i < value; i++) {
    arr.push(i)
  }
  for( var m = arr.length;  m; ) {
      var i = Math.floor( Math.random() * m-- );
      var t = arr[m];
      arr[m] = arr[i];
      arr[i] = t;
  }
  var output = [];
  for( var i = 0, n = arr.length-1;  i < n;  i += 2 ) {
      output.push([ arr[i], arr[i+1] ]);
  }
  console.log(output);

}



getCoins(12) //[1, 11] dan [5, 7]
getCoins(17) //[1, 5, 11] dan [1,7,9]
getCoins(3) //-1

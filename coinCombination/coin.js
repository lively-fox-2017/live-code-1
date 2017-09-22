function getCoins(value) {
  let angka = [1,5,7,9,11]
  let tampung = []
  for (var i = 0; i < angka.length; i++) {
    for (var j = 0; j < angka.length; j++) {
      if (angka[i] + angka[j] == value) {
        tampung.push(angka[i]);
        tampung.push(angka[j]);
      }
    }
  }
  // SOAL 1
  var hasil = tampung.filter(function(elem, pos) {
      return tampung.indexOf(elem) == pos;
  });
  var convert =  hasil.toString();
  var pertama =  convert.split(',').reverse().slice(0,2);
  var kedua =  convert.split(',').reverse().slice(2,4);
  return '['+pertama+']' + ' dan ' + '['+kedua+']'
  return hasil

}

console.log(getCoins(12)) //[1, 11] dan [5, 7]

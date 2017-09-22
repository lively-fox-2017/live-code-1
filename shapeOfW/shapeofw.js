function reorderingLetter(str, totalLevel) {
  //your code here...
  if (totalLevel > 6) {
    return -1;
  }
  let illustration = [];
  for (let i = 0; i < totalLevel; i++) {
    illustration.push([]);
  }

  let strLength = 0;
  let level = 0;
  let col = 0;
  let downPhase = true;
  while (strLength < str.length) {
    illustration[level][col] = str[strLength++];
    col++;
    (downPhase) ? level++ : level--;
    if (level === totalLevel - 1)
      downPhase = false;
    else if (level === 0)
      downPhase = true;
  }

  let result = '';
  for (let i = 0; i < illustration.length; i++) {
    for (let j = 0; j < illustration[i].length; j++) {
      if (illustration[i][j]) {
        result += illustration[i][j];
      }
    }
  }
  return result;
}

console.log(reorderingLetter("DARWINFOX", 3)); //DIXAWNORF
console.log(reorderingLetter("ABCDEFGHIJKLMNOPQ", 5)); //AIQBHJPCGKODFLNEM

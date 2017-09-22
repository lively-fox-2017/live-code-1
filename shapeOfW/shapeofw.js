function reorderingLetter(str, totalLevel) {
  let resultArr = [];
  let output = '';

  // Generate dimensions
  for (let i = 0; i < totalLevel; i++) {

    resultArr.push([]);

  }

  let level = 0;
  let min = 0;
  let max = totalLevel - 1;
  let down = true;

  // Loop through str
  for (let i = 0; i < str.length; i++) {

    resultArr[level].push(str[i]);

    /**
      if down == true then increment the level (0 -> 1 -> 2),
      else: decrement the level (2 -> 1 -> 0)
     */
    if (down) {

      // If level reached max then down = false
      if (level === max) {
        down = false;
        level -= 1;
      } else {
        level += 1;
      }


    } else {

      // If level reached max then down = true
      if (level === min) {
        down = true;
        level += 1;
      } else {
        level -= 1;
      }

    }


  }

  // Generate output
  for (let i = 0; i < resultArr.length; i++) {

    output += resultArr[i].join('');

  }

  return output;
}

reorderingLetter('DARWINFOX', 3); //DIXAWNORF
reorderingLetter('ABCDEFGHIJKLMNOPQ', 5); //AIQBHJPCGKODFLNEM

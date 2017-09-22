function getCoins(value) {
	let coins = [1, 5, 7, 9, 11];
  let results = [];

  if (value > 0 && value <= 20) {

    // Between 1 and 20

    // Generate pairs
    for (let i = 0; i < coins.length; i++) {

      for (let j = i + 1; j < coins.length; j++) {

        if (coins[i] + coins[j] === value) {

          results.push([coins[i], coins[j]]);

        }

      }

    }

    // Try threes
    if (!results.length) {

      // Generate threes
      for (let i = 0; i < coins.length; i++) {

        for (let j = i + 1; j < coins.length; j++) {

          for (let k = j + 1; k < coins.length; k++) {

            if (coins[i] + coins[j] + coins[k] === value) {

              results.push([coins[i], coins[j], coins[k]]);

            }

          }

        }

      }

    }

  } else {

    // more than 20

    // Generate pairs
    for (let i = 0; i < coins.length; i++) {

      for (let j = i + 1; j < coins.length; j++) {

        if (coins[i] + coins[j] === value) {

          results.push([coins[i], coins[j]]);

        }

      }

    }

    // Try threes
    if (!results.length) {

      // Generate threes
      for (let i = 0; i < coins.length; i++) {

        for (let j = i + 1; j < coins.length; j++) {

          for (let k = j + 1; k < coins.length; k++) {

            if (coins[i] + coins[j] + coins[k] === value) {

              results.push([coins[i], coins[j], coins[k]]);

            }

          }

        }

      }

    }

    // Try fours
    if (!results.length) {

      // Generate fours
      for (let i = 0; i < coins.length; i++) {

        for (let j = i + 1; j < coins.length; j++) {

          for (let k = j + 1; k < coins.length; k++) {

            for (let l = k + 1; l < coins.length; l++) {

              if (coins[i] + coins[j] + coins[k] + coins[l] === value) {

                results.push([coins[i], coins[j], coins[k], coins[l]]);

              }

            }

          }

        }

      }

    }

    // Try ALL OF THEM xD
    if (!results.length) {

      // Generate fives
      for (let i = 0; i < coins.length; i++) {

        for (let j = i + 1; j < coins.length; j++) {

          for (let k = j + 1; k < coins.length; k++) {

            for (let l = k + 1; l < coins.length; l++) {

              for (let m = l + 1; m < coins.length; m++) {

                if (coins[i] + coins[j] + coins[k] + coins[l] + coins[m] === value) {

                  results.push([coins[i], coins[j], coins[k], coins[l], coins[m]]);

                }

              }

            }

          }

        }

      }

    }

  }


  if (results.length) {

    let output = '';

    for (let i = 0; i < results.length; i++) {

      output += '[' + results[i] + ']';

      if (i < results.length - 1) {

        output += ' dan ';

      }

    }

    return output;

  }

  return -1;

}


getCoins(12); //[1, 11] dan [5, 7]
getCoins(17); //[1, 5, 11] dan [1,7,9]
getCoins(3); //-1

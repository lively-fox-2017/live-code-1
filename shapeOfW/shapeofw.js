function reorderingLetter(str, totalLevel) {
  //your code here...
  let board = []
  let k =0
  // let 
  for (let i = 0; i < totalLevel; i++){
    board.push([])
  }
  console.log(board)
  for (let i = 0; i < str.length; i++){
    board[k].push(str[i])
    if (k < totalLevel - 1) {
      k++
    }
    if (k >= totalLevel) {
      k--
    } else {
      k =0
    }
  }
    console.log(board)
}

reorderingLetter('DARWINFOX', 3) //DIXAWNORF
// reorderingLetter('ABCDEFGHIJKLMNOPQ', 5) //AIQBHJPCGKODFLNEM

// https://www.acmicpc.net/problem/2578
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(bingo, numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      count++;

      for (let k = 0; k < bingo.length; k++) {
        let checked = false;
        for (let l = 0; l < bingo[k].length; l++) {
          if (bingo[k][l] === numbers[i][j]) {
            bingo[k][l] = true;
            checked = true;
            break;
          }
        }
        if (checked === true) break;
      }

      if (checkBingo(bingo) >= 3) {
        return count;
      }
    }
  }

  return [bingo, numbers];
}

function checkBingo(board) {
  let count = 0;
  // 가로
  for (let i = 0; i < board.length; i++) {
    let isBingo = true;
    for (let j = 0; j < board[i].length - 1; j++) {
      if (board[i][j] !== board[i][j + 1]) {
        isBingo = false;
        break;
      }
    }
    if (isBingo === true) {
      count += 1;
    }
  }
  // 세로
  for (let i = 0; i < board[0].length; i++) {
    let isBingo = true;
    for (let j = 0; j < board.length - 1; j++) {
      if (board[j][i] !== board[j + 1][i]) {
        isBingo = false;
        break;
      }
    }
    if (isBingo === true) {
      count += 1;
    }
  }
  // 대각
  let checked = true;
  for (let i = 0; i < 4; i++) {
    if (board[i][i] !== board[i + 1][i + 1]) {
      checked = false;
      break;
    }
  }
  if (checked === true) {
    count += 1;
  }
  checked = true;
  for (let i = 0; i < 4; i++) {
    if (board[i][4 - i] !== board[i + 1][3 - i]) {
      checked = false;
      break;
    }
  }
  if (checked === true) {
    count += 1;
  }

  return count;
}

console.log(solution(input.slice(0, 5), input.slice(5)));

// https://www.acmicpc.net/problem/1051
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(""));

function solution(square) {
  let answer = 1;
  for (let i = 0; i < square.length; i++) {
    for (let j = 0; j < square[i].length; j++) {
      const result = checkSquare(square, i, j);
      answer = Math.max(answer, ...result);
    }
  }

  return answer;
}

function checkSquare(square, I, J) {
  const result = [];
  const smaller = Math.min(square.length - I, square[I].length - J);
  for (let i = 1; i < smaller; i++) {
    const [a, b, c, d] = [square[I][J], square[I][J + i], square[I + i][J], square[I + i][J + i]];
    if (a === b && b === c && c === d && a === d) {
      result.push((i + 1) ** 2);
    }
  }
  return result;
}
// 42101
// 22100
// 22101

console.log(solution(input.slice(1)));

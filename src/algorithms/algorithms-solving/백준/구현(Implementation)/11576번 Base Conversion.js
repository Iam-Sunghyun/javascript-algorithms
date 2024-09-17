// https://www.acmicpc.net/problem/11576
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(A, B, numbers) {
  // A진수 -> 10진수로
  let decimal = 0;
  for (let i = numbers.length - 1; i >= 0; i--) {
    decimal += Number(numbers[i]) * A ** (numbers.length - 1 - i);
  }

  // 10진수 -> B진수로
  let answer = "";
  while (true) {
    answer += " " + (decimal % B);
    decimal = Math.floor(decimal / B);
    if (Math.floor(decimal / B) === 0) {
      answer += " " + (decimal % B);
      break;
    }
  }

  return answer.trim().split(" ").reverse().join(" ");
}

console.log(solution(+input[0][0], +input[0][1], input[2]));

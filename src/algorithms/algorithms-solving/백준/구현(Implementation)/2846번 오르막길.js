// https://www.acmicpc.net/problem/2846
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(numbers) {
  const answer = new Array(numbers.length).fill(0);

  for (let i = 1; i < numbers.length; i++) {
    let next = numbers[i];
    for (let j = i - 1; j >= 0; j--) {
      if (next > numbers[j]) {
        next = numbers[j];
      } else {
        break;
      }
    }
    answer[i] = numbers[i] - next;
  }

  answer.sort((a, b) => b - a);

  return answer[0];
}

console.log(solution(input[1]));

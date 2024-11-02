// https://www.acmicpc.net/problem/17952
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(list) {
  const stack = [];
  let answer = 0;

  for (let i = 0; i < list.length; i++) {
    if (list[i][0] === 0 && stack.length === 0) continue;
    if (list[i][0] === 0) {
      stack.at(-1)[2] -= 1;
    } else {
      stack.push(list[i]);
      stack.at(-1)[2] -= 1;
    }
    if (stack.at(-1)[2] === 0) {
      answer += stack.pop()[1];
    }
  }

  return answer;
}

console.log(solution(input.slice(1)));

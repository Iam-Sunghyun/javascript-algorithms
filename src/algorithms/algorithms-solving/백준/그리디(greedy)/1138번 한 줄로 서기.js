// https://www.acmicpc.net/problem/1138
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(list) {
  const answer = new Array(list.length).fill(0);

  for (let i = list.length - 1; i >= 0; i--) {
    answer.splice(list[i], 0, i + 1);
  }

  return answer.filter((n) => n !== 0).join(" ");
}

console.log(solution(input[1]));

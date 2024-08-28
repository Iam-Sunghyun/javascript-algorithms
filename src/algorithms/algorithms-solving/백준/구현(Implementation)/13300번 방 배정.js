// https://www.acmicpc.net/problem/13300
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(K, lists) {
  // 0여 1남
  const man = new Array(6).fill(0);
  const woman = new Array(6).fill(0);

  for (const [s, count] of lists) {
    if (s === "0") {
      woman[count - 1] += 1;
    } else if (s === "1") {
      man[count - 1] += 1;
    }
  }

  let answer = 0;
  for (let i = 0; i < 6; i++) {
    answer += Math.ceil(man[i] / K);
    answer += Math.ceil(woman[i] / K);
  }

  return answer;
}

console.log(solution(input[0][1], input.slice(1)));

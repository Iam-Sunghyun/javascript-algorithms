// https://www.acmicpc.net/problem/2847
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(lvs) {
  let count = 0;
  for (let i = lvs.length - 1; i >= 1; i--) {
    if (lvs[i] <= lvs[i - 1]) {
      count += lvs[i - 1] - lvs[i] + 1;
      lvs[i - 1] -= lvs[i - 1] - lvs[i] + 1;
    }
  }

  return count;
}

console.log(solution(input.slice(1)));

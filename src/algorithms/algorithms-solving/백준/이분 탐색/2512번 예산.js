// https://www.acmicpc.net/problem/2512
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(areas, M) {
  let [left, right] = [0, -Infinity];

  for (const area of areas) {
    right = Math.max(area, right);
  }

  let mid = 0;
  let max = -Infinity;
  while (left <= right) {
    let sum = 0;
    mid = Math.floor((left + right) / 2);
    for (const area of areas) {
      sum += area > mid ? mid : area;
    }
    if (sum <= M) {
      max = Math.max(max, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return max;
}

console.log(solution(input[1], input[2][0]));

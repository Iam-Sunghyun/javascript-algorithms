// https://www.acmicpc.net/problem/2805
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(M, trees) {
  let [left, right] = [0, -Infinity];
  for (const tree of trees) {
    right = Math.max(tree, right);
  }

  let answer = -Infinity;
  let mid = 0;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    let sum = 0;
    for (const tree of trees) {
      if (tree - mid >= 0) {
        sum += tree - mid;
      }
    }
    if (sum >= M) {
      answer = Math.max(answer, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

console.log(solution(input[0][1], input[1]));

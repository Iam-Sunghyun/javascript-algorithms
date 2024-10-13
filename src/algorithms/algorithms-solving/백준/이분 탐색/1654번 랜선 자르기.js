// https://www.acmicpc.net/problem/1654
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(N, lines) {
  let sum = 0;
  for (const line of lines) {
    sum += line;
  }

  let [left, right] = [0, Math.floor(sum / N)];
  let answer = -Infinity;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    let lineCount = 0;
    for (const line of lines) {
      lineCount += Math.floor(line / mid);
    }
    if (lineCount >= N) {
      answer = Math.max(answer, mid);
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return answer;
}

console.log(solution(input[0][1], input.slice(1).flat()));

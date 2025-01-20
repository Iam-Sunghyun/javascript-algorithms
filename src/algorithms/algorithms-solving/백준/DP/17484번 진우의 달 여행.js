// https://www.acmicpc.net/problem/17484
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));
// const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

function solution(fuels) {
  const sum = Array.from({ length: fuels.length }, () =>
    Array.from({ length: fuels[0].length }, () => [0, 0, 0])
  );

  for (let i = 0; i < fuels[0].length; i++) {
    sum[0][i].fill(fuels[0][i]);
  }

  for (let i = 1; i < sum.length; i++) {
    for (let j = 0; j < sum[i].length; j++) {
      if (j === 0) {
        sum[i][j][1] = sum[i - 1][j][2] + fuels[i][j];
        sum[i][j][2] = Math.min(sum[i - 1][j + 1][0], sum[i - 1][j + 1][1]) + fuels[i][j];
        sum[i][j][0] = Math.min(sum[i][j][1], sum[i][j][2]);
      } else if (j === sum[i].length - 1) {
        sum[i][j][0] = Math.min(sum[i - 1][j - 1][1], sum[i - 1][j - 1][2]) + fuels[i][j];
        sum[i][j][1] = sum[i - 1][j][0] + fuels[i][j];
        sum[i][j][2] = Math.min(sum[i][j][0], sum[i][j][1]);
      } else {
        sum[i][j][0] = Math.min(sum[i - 1][j - 1][1], sum[i - 1][j - 1][2]) + fuels[i][j];
        sum[i][j][1] = Math.min(sum[i - 1][j][0], sum[i - 1][j][2]) + fuels[i][j];
        sum[i][j][2] = Math.min(sum[i - 1][j + 1][0], sum[i - 1][j + 1][1]) + fuels[i][j];
      }
    }
  }
  let min = +Infinity;
  sum.at(-1).forEach((n) => (min = Math.min(...n, min)));
  return min;
}

console.log(solution(input.slice(1)));

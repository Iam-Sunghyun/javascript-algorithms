// https://www.acmicpc.net/problem/2456
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(numbers) {
  const sum = [0, 0, 0];
  const count = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  for (let i = 0; i < numbers.length; i++) {
    for (let j = 0; j < numbers[i].length; j++) {
      sum[j] += numbers[i][j];
      count[j][numbers[i][j] - 1] += 1;
    }
  }
  let max = Math.max(...sum);
  const sameIndex = [];
  for (let i = 0; i < 3; i++) {
    if (sum[i] === max) {
      sameIndex.push(i);
    }
  }

  if (sameIndex.length === 1) {
    return `${sameIndex[0] + 1} ${sum[sameIndex[0]]}`;
  } else if (sameIndex.length === 2) {
    for (let i = 0; i < 3; i++) {
      if (count[sameIndex[0]][i] > count[sameIndex[1]][i]) {
        return `${sameIndex[0] + 1} ${sum[sameIndex[0]]}`;
      } else if (count[sameIndex[0]][i] < count[sameIndex[1]][i]) {
        return `${sameIndex[1] + 1} ${sum[sameIndex[1]]}`;
      } else {
        continue;
      }
    }
  } else {
    for (let i = 0; i < 3; i++) {
      if (
        count[sameIndex[0]][i] > count[sameIndex[1]][i] &&
        count[sameIndex[0]][i] > count[sameIndex[2]][i]
      ) {
        return `${sameIndex[0] + 1} ${sum[sameIndex[0]]}`;
      } else if (
        count[sameIndex[0]][i] < count[sameIndex[1]][i] &&
        count[sameIndex[2]][i] < count[sameIndex[1]][i]
      ) {
        return `${sameIndex[1] + 1} ${sum[sameIndex[1]]}`;
      } else if (
        count[sameIndex[0]][i] < count[sameIndex[2]][i] &&
        count[sameIndex[1]][i] < count[sameIndex[2]][i]
      ) {
        return `${sameIndex[2] + 1} ${sum[sameIndex[2]]}`;
      } else {
        continue;
      }
    }
  }

  return `0 ${sum.sort((a, b) => b - a)[0]}`;
}

console.log(solution(input.slice(1)));

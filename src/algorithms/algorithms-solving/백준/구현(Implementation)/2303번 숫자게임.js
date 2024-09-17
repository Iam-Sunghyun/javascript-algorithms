// https://www.acmicpc.net/problem/2303
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(cards) {
  const answer = [];
  for (let i = 0; i < cards.length; i++) {
    answer.push(combination(cards[i]));
  }

  let max = -Infinity;
  let maxIndex = [];
  answer.forEach((n, i) => {
    if (n >= max) {
      max = n;
      maxIndex.push(i + 1);
    }
  });
  return maxIndex.sort((a, b) => a - b).at(-1);
}

function combination(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        const lastNum = String(arr[i] + arr[j] + arr[k]).at(-1);
        max = Math.max(+lastNum, max);
      }
    }
  }
  return max;
}

console.log(solution(input.slice(1)));

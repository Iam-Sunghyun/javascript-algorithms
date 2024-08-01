// https://www.acmicpc.net/problem/2476
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(dices) {
  const answer = [];

  for (const dice of dices) {
    answer.push(checkDicesPrice(dice));
  }
  let max = getMax(answer);
  return max;
}

function checkDicesPrice(dice) {
  if (dice[0] === dice[1] && dice[1] === dice[2]) {
    return 10000 + dice[0] * 1000;
  }
  if (dice[0] === dice[1] || dice[0] === dice[2]) {
    return 1000 + dice[0] * 100;
  } else if (dice[1] === dice[2]) {
    return 1000 + dice[1] * 100;
  }
  const max = getMax(dice);
  return max * 100;
}

function getMax(arr) {
  let max = -Infinity;
  for (let i = 0; i < arr.length; i++) {
    max = Math.max(arr[i], max);
  }
  return max;
}

console.log(solution(input.slice(1)));

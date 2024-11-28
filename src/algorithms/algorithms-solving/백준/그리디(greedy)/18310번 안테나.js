// https://www.acmicpc.net/problem/18310
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(houses) {
  houses.sort((a, b) => a - b);

  const check = new Array(houses.at(-1) + 1).fill(0);

  for (let i = 0; i < houses.length; i++) {
    check[houses[i]] += 1;
  }

  let restHouse = houses.length;
  let totalLength = houses.reduce((acc, n) => acc + n - houses[0], 0) + restHouse;
  let min = +Infinity;
  let passed = 0;
  let answer = 0;
  for (let i = houses[0]; i < check.length; i++) {
    // console.log(totalLength, min, passed, restHouse)
    if (check[i] > 0) {
      totalLength += passed - restHouse;
      restHouse -= check[i];
      passed += check[i];
    } else {
      totalLength += passed - restHouse;
    }
    if (min > totalLength) {
      min = Math.min(min, totalLength);
      answer = i;
    }
  }

  return answer;
}

console.log(solution(input[1]));

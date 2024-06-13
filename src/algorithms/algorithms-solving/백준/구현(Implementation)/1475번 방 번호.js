// 백준 1475 구현 https://www.acmicpc.net/problem/1475
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(numbers) {

  const setsArray = new Array(10).fill(0);

  for (const number of numbers) {
    setsArray[number] += 1;
  }
  const sixAndNine = Math.ceil((setsArray[6] + setsArray[9]) / 2);
  setsArray[6] = sixAndNine;
  setsArray[9] = sixAndNine;

  let max = -Infinity;
  for (const count of setsArray) {
    max = Math.max(count, max);
  }

  return max;
}

console.log(solution(input));

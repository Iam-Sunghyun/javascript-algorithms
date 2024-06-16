// https://www.acmicpc.net/problem/2960
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(numbers) {

  const array = Array.from({ length: numbers[0] + 1 }, (_, i) => i);
  [array[0], array[1]] = [false, false];
  let count = 0;

  for (let i = 2; i <= numbers[0]; i++) {

    for (let j = i; j < array.length; j += i) {
      if (array[j] === false) continue;
      count += 1;
      if (count === numbers[1]) return array[j];
      array[j] = false;
    }
  }
}

console.log(solution(input.slice()));

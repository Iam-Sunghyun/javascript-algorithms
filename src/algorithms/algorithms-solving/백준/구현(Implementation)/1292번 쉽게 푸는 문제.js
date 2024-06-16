// https://www.acmicpc.net/problem/1292
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

function solution(numbers) {

  const array = [];

  for (let i = 1; i <= 1000; i++) {
    for (let j = 1; j <= i; j++) {
      array.push(i);
    }
  }

  let answer = 0;
  for (let i = numbers[0] - 1; i <= numbers[1] - 1; i++) {
    answer += array[i];
  }

  return answer;
}

console.log(solution(input.slice()));

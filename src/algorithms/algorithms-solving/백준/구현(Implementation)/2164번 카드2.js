// https://www.acmicpc.net/problem/2164
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(N) {
  const numbers = Array.from({ length: N }, (_, i) => i + 1);
  let left = 0;

  while (left < numbers.length - 1) {
    left += 1;
    const tmp = numbers[left];
    numbers.push(tmp);
    left += 1;
  }

  return numbers.at(-1);
}

console.log(solution(input));

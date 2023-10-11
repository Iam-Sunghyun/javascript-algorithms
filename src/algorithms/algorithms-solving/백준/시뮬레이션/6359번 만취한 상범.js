// 백준 시뮬레이션 브론즈2 https://www.acmicpc.net/problem/6359
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(n) {
  const doors = new Array(n).fill(false);

  for (let i = 1; i <= n; i++) {
    for (let j = i - 1; j < n; j += i) {
      doors[j] = !doors[j];
    }
  }

  return doors.filter((open) => open).length;
}

const answer = [];
for (let i = 1; i < input.length; i++) {
  answer.push(solution(input[i]));
}
console.log(answer.join('\n'));
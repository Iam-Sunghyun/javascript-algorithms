// 백준 17614번 완전 탐색 https://www.acmicpc.net/problem/17614
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

function solution(n) {
  const targetNumbers = new Set([3, 6, 9]);
  let answer = 0;

  for (let i = 1; i <= n; i++) {
    const str = String(i);
    for (let j = 0; j < str.length; j++) {
      if (targetNumbers.has(+str[j])) {
        answer += 1;
      }
    }
  }
  return answer;
}

console.log(solution(input[0]));
// 백준 11727번 실버3 https://www.acmicpc.net/problem/11727
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
  const answer = new Array(n).fill(0);
  answer[0] = 1;
  answer[1] = 3;

  for (let i = 2; i < n; i++) {
    answer[i] = (answer[i - 2] * 2 + answer[i - 1]) % 10007;
  }

  return answer[n - 1];
}

console.log(solution(input));

// 백준 11726번 DP 실버3 https://www.acmicpc.net/problem/11726
// 기본적인 DP 문제
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(number) {
  const answer = new Array(number).fill(0);
  answer[0] = 1;
  answer[1] = 2;

  for (let i = 2; i < number; i++) {
    answer[i] = (answer[i - 2] + answer[i - 1]) % 10007;
  }
  return answer[number - 1];
}

console.log(solution(input));
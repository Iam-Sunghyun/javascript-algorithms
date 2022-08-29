// 문제만 다른 피보나치 문제
// 백준 1904번 동적 프로그래밍 https://www.acmicpc.net/problem/1904
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

function solution(num) {
  // 상향식으로 구현
  const answer = [1, 2];
  for (let i = 2; i < num; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 15746;
  }
  return answer[num - 1];
}

console.log(solution(+input[0]));
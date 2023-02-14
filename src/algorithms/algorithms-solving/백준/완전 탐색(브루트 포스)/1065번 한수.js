// 백준 2231번 완전 탐색 https://www.acmicpc.net/problem/1065
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
  let answer = 0;

  for (let i = 1; i <= n; i++) {

    // 각 자리 순회를 위해 문자열 변환
    const str = i.toString();

    // 2자리 이하 숫자는 모두 한수이므로 3자리 이상부터 체크
    if (str.length > 2) {
      const difference = str[1] - str[0];
      for (let j = 1; j < str.length - 1; j++) {
        // 1번~2번의 차와 같은지 검사
        if (str[j + 1] - str[j] === difference) answer += 1;
      }
    } else answer += 1;
  }
  return answer;
}

console.log(solution(input));

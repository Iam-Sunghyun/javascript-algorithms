// 백준 1463번 실버3 https://www.acmicpc.net/problem/1463
// 풀이 참고 https://gywlsp.github.io/boj/1463/
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(n) {
  // 반복문 인덱스 편의를 위해 n+1 크기 배열 선언
  const table = new Array(+n + 1).fill(0);
  table[1] = 0;
  table[2] = 1;

  // 숫자 i가 1이 될 수 있는 경우의 수는 다음 3가지 이다
  // 1. i-1이 1이 되기 위한 최소 연산 수 + 1
  // 2. i가 3으로 나누어 떨어진다면, i/3이 1이 되기 위한 최소 연산 수 + 1
  // 3. i가 2로 나누어 떨어진다면, i/2가 1이 되기 위한 최소 연산 수 + 1
  // 위 3가지 경우의 수 중 가장 작은 값이 곧 숫자 i가 1이 되기 위한 최소 연산 수이다
  // 각 경우의 수에서 +1을 해주는 이유는 이전 숫자에서 필요한 최소 연산 수에서 -1, /3, /2 중 하나의 연산을 한 것도 가짓 수에 포함시키는 것
  for (let i = 3; i <= n; i++) {
    table[i] = table[i - 1] + 1;

    if (i % 3 === 0) {
      table[i] = Math.min(table[i], table[i / 3] + 1);
    }
    if (i % 2 === 0) {
      table[i] = Math.min(table[i], table[i / 2] + 1);
    }
  }
  return table[n];
}

console.log(solution(input));

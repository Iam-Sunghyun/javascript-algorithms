/**
 * 상향식 동적 프로그래밍(타뷸레이션)을 이용한 피보나치 1
 * @param {number} n
 * @returns {number[]}
 */
function solution1(n) {
  const table = new Array(n).fill(0);
  table[0] = 0;
  table[1] = 1;

  // 가장 하위부터 상향식 계산
  for (let i = 2; i <= n; i++) {
    table[i] = table[i - 1] + table[i - 2];
  }

  return table;
}

console.log(solution1(5));

// 테이블 제거 버전
function solution2(n) {
  let a = 0;
  let b = 1;

  // 가장 하위부터 상향식 계산
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }

  return b;
}

console.log(solution2(5));

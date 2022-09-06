/** 
 * 피보나치 DP 하향식(메모이제이션)
 */
function solution(n) {
  const a = []
  a[0] = 0;
  a[1] = 1;
  function fib(n) {
    // // 재귀 종료 조건
    // if (n <= 1) return n;

    // 했던 연산 스킵
    if (typeof a[n] !== 'undefined') return a[n];

    // 하향식 계산
    a[n] = fib(n - 1) + fib(n - 2);
    return a[n];
  }

  return [fib(n), a];
}

console.log(solution(5));

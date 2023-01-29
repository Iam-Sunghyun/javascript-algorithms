/**
 * 하향식 동적 프로그래밍(메모이제이션)을 사용한 피보나치 
 * @param {number} n
 * @returns {number[]}
 */
function solution(n) {
  const memory = [];
  memory[0] = 0;
  memory[1] = 1;

  function fib(n) {
    // 했던 연산 스킵
    if (typeof memory[n] !== 'undefined') return memory[n];

    // 연산 결과 메모리에 기록
    memory[n] = fib(n - 1) + fib(n - 2);
    return memory[n];
  }

  fib(n);
  return memory;
}

console.log(solution(5));

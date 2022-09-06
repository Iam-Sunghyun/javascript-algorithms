/** 
 * 피보나치 DP 상향식(타뷸레이션)
 */
function solution1(n) {
  const a = new Array(n).fill(0);
  a[0] = 0;
  a[1] = 1;

   // 가장 하위부터 상향식 계산
  for (let i = 2; i <= n; i++){
    a[i] = a[i - 1] + a[i - 2];
  }

  return a;
}

console.log(solution1(5));

// 변수 제거 버전
function solution2(n) {
  let a = 0, b = 1;

   // 가장 하위부터 상향식 계산
  for (let i = 2; i <= n; i++){
    [a, b] = [b, a + b];
  }

  return b;
}
console.log(solution2(5))
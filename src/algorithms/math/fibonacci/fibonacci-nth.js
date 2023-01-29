/**
 * 피보나치 수열 N번째 값 구하기
 * @param {number} n 
 * @return {number}
 */
export default function fibonacciNth(n){
  let current = 1;
  let previous = 0;

  while(n - 1){
    current = current + previous;
    previous = current - previous;
    n = n - 1;
  }
  return current;
}

console.log(fibonacciNth(6)); // 8

/**
 * 피보나치 수열 단순 재귀(recursion)로 구현
 * @param {number} n 
 * @returns {number}
 */
export default function fibonacciRecursive(n){
  if(n <= 1) return 1;
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
}

console.log(fibonacciRecursive(5))
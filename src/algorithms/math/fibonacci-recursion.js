/**
 * 피보나치 수열 재귀(recursion) 구현
 * @param {number} n 
 * @return {number}
 */
 export default function fibonacciRecursive(n){
  if(n === 1 || n === 2) return 1;
  return fibonacci(n - 1) + fibonacci(n - 2)
}


console.log(fibonacci(5))
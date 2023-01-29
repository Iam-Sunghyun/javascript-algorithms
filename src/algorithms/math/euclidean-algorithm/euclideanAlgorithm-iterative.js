/**
 * 최대 공약수(Greatest Common Divisor) 구하기 (반복)
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
export default function euclideanAlgorithmIterative(A, B) {
  let a = Math.abs(A);
  let b = Math.abs(B);
  
  // a, b가 다른 값이고 0이 아닌 경우 
  while((a && b) && (a !== b)){
    [a , b] = [b , a % b];
  }
    
  return a;
}

// console.log(euclideanAlgorithmIterative(16, 6))
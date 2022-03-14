/**
 * 최대 공약수(Greatest Common Divisor) 구하기 (반복)
 *
 * @param {number} A
 * @param {number} B
 * @return {number}
 */
export default function euclideanAlgorithmIterative(A, B) {
  const a = Math.abs(A);
  const b = Math.abs(B);
  
  while(b !== 0){
    [a , b] = [b , a % b];
  }
  return a;
}

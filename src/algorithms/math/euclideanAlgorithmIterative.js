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
  
  // a, b가 같거나 0인 경우 
  while(a && b && a !== b){
    [a , b] = [b , a % b];
  }
  
  /*
   while (a && b && a !== b) {
    [a, b] = a > b ? [a - b, b] : [a, b - a];
  }
  */
  
  return a;
}

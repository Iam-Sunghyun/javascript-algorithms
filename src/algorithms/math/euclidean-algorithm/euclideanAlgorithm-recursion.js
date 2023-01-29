/**
 * 최대 공약수(Greatest Common Divisor) 구하기 (재귀)
 * @param {number} originalA
 * @param {number} originalb
 * @return {number}
 */
export default function euclideanAlgorithm(originalA, originalB) {
  
  const a = Math.abs(originalA);
  const b = Math.abs(originalB);

  return (b === 0) ? a : euclideanAlgorithm(b, a % b);
}

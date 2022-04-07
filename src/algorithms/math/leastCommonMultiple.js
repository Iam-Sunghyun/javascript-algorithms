import euclideanAlgorithm from './euclideanAlgorithm.js';
/**
 * 유클리드 호제법 사용한 LCM
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
export default function leastCommonMultiple(a, b) {
  return ((a === 0) || (b === 0)) ? 0 : Math.abs(a * b) / euclideanAlgorithm(a, b);
}

/**
 * https://programmers.co.kr/learn/courses/30/lessons/12947
 * @param {number} x 
 * @returns {boolean}
 */
function solution(x) {
  const number = [...x.toString()].reduce((acc, num) => acc + +num, 0);
  return x % number === 0 ? true : false;
}

console.log(solution(10)); // true
console.log(solution(12)); // true
console.log(solution(11)); // false
console.log(solution(13)); // false

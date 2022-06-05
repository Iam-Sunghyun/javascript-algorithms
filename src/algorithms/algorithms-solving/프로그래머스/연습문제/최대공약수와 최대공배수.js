/**
 * 초간단 문제 https://programmers.co.kr/learn/courses/30/lessons/12940
 * @param {number} n 
 * @param {number} m 
 * @returns {number[]} 
 */
function solution(n, m) {
  let [a, b] = [n, m]

  while(b !== 0){
    [a, b] = [b, a % b];
  }

  return [a, (n * m) / a];
}

console.log(solution(3, 12)); // [3, 12]
console.log(solution(2, 5)); // [1, 10]

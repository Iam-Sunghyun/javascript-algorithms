/**
 * 프로그래머스 **레벨 2** 
 * 2017 팁스타운 https://programmers.co.kr/learn/courses/30/lessons/12985
 * @param {number} n 
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function solution(n, a, b) {
  let count = 0;

    while (a !== b) {
      a = Math.ceil(a / 2);
      b = Math.ceil(b / 2);
      count += 1;
    }

  return count;
}

console.log(solution(16, 4, 16));
console.log(solution(8, 4, 5));
console.log(solution(8, 3, 4));


/**
 * 프로그래머스 **레벨 1** 
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12934
 * @param {number} n 
 * @returns {number}
 */
function solution(n) {
  const answer = Math.sqrt(n);

  return answer - Math.floor(answer) ? -1 : (answer + 1) ** 2;
}

console.log(solution(121)); // 144
console.log(solution(3)); // -1

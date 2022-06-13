/**
 * 프로그래머스 **레벨 1** 
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12933
 * @param {number} n 
 * @returns {number}
 */
function solution(n) {
  const answer = n.toString()
                  .split('')
                  .sort((a, b) => b - a)
                  .join('')
  return +answer
}

console.log(solution(118372)) // 873211
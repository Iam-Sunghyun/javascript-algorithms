/**
 * 프로그래머스 **레벨 1** 
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12932
 * @param {number} n 
 * @returns {number}
 */
function solution(n) {
  // 문자열 to 숫자값 형변환 방법
  // 1) parseInt(정수 문자열)  || parseFloat(실수 문자열)
  // 2) Number(문자열 or 불리언)
  // 3) + (문자열 or 불리언)
  // 4) (문자열 or 불리언) * 1
  return n.toString()
          .split('')
          .reverse()
          .map(element => +element);
}

console.log(solution(12345)); 
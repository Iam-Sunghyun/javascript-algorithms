/**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12917
 * @param {string} s 
 * @returns {string}
 */
function solution(s) {
  // 몸풀기용 초간단 문제
  const answer = [...s].sort();
  return answer.reverse().join('');
}

console.log(solution("Zbcdefg")); // gfedcbZ
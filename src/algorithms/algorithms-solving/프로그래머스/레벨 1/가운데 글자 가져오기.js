/**
 * 프로그래머스 **레벨 1**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12903
 * @param {string} s 
 * @returns {string}
 */
function solution(s) {
  var answer = '';
  return s.length % 2 === 0 ? s[Math.floor((s.length / 2)) - 1] + s[Math.floor((s.length / 2))] : s[Math.floor((s.length / 2))];
}

console.log(solution('abcde')); // 'c'
console.log(solution('qwer')); // 'we'

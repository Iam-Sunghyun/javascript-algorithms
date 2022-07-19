/**
 * 프로그래머스 **레벨 2**
 * 스택/큐 https://school.programmers.co.kr/learn/courses/30/lessons/12909
 * @param {string} s 
 * @returns {boolean}
 */
function solution(s) {
  if (s.length % 2 === 1 || s.length === 0) return false;

  let answer = 0;

  // 스택이 아닌 단순 반복문으로 풀이하였음
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') { answer += 1; }
    else { answer -= 1; }
    if (answer < 0) return false;
  }

  return answer !== 0 ? false : true;
}

console.log(solution("()()"));
console.log(solution("(())()"));
console.log(solution(")()("));
console.log(solution(")"));


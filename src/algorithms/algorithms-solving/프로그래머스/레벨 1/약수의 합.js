/**
 * 프로그래머스 **레벨 1** 
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12928
 * @param {number} n 
 * @returns {number}
 */
function solution(n) {
  let answer = 1;
  if(n === 0) return 0;
  for(let i = 2; i <= n; i++){
      n % i === 0 ? answer += i : answer;
  }
  return answer;
}

console.log(solution(12)); // 28
console.log(solution(0)); 

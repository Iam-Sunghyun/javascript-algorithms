/**
 * 너무 쉬운 문제
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

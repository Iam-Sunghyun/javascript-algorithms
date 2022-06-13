/**
 * 프로그래머스 **레벨 1** 
 * 프로그래머스 월간 코드 챌린지 시즌3 (https://programmers.co.kr/learn/courses/30/lessons/87389)
 * @param {number} n 
 * @returns {number}
 */
function solution(n) {
 
  for(let i = 2; i <= n; i++){
    if(n % i === 1){
      return i;
    }
  }
}

console.log(solution(10));
console.log(solution(12));
console.log(solution(15));
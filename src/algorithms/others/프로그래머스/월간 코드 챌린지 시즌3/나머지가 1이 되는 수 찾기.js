/**
 * 월간 코드 챌린지 시즌 3 (https://programmers.co.kr/learn/courses/30/lessons/87389)
 * @param {number} n 
 * @returns 
 */
function solution(n) {
  var answer = 0;
  const divisor = [];
  for(let i = 2; i <= n; i++){
    if(n % i === 1){
      return i;
    }
  }
}

console.log(solution(10))
console.log(solution(12));

/**
 * 프로그래머스 월간 코드 챌린지 시즌1 (https://programmers.co.kr/learn/courses/30/lessons/70128)
 * @param {*} a 
 * @param {*} b 
 * @returns 
 */
function solution(a, b) {
  var answer = 0;

  for(let i = 0; i < a.length; i++){
    answer += a[i] * b[i];
  }

  return answer;
}

console.log(solution([1,2,3,4],[-3,-1,0,2]))
console.log(solution([-1,0,1],[1,0,-1]))

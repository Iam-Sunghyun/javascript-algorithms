/**
 * 프로그래머스 **레벨 1**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12912
 * @param {number} a 
 * @param {number} b 
 * @returns {number}
 */
function solution(a, b) {
  var answer = 0;
  if(a > b){
    [a, b] = [b, a];
  }
  for(let i = a; i <= b; i++){
    answer += i;
  }

  return answer;
}

console.log(solution(3, 5));
console.log(solution(3, 3));
console.log(solution(5, 3));
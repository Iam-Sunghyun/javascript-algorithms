/**
* 프로그래머스 **레벨 2**
* 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12939
*/
function solution(s) {
  const answer = s.split(' ').map(Number);
  return `${Math.min(...answer)} ${Math.max(...answer)}`;
}

console.log(solution('1 2 3 4')); // "1 4"
console.log(solution('-1 -2 -3 -4')); // "-4 -1"
console.log(solution('-1 -1')); // "-1 -1"

/**
 * 프로그래머스 **레벨 1**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12919
 * @param {string[]} seoul 
 * @returns {string[]}
 */
function solution(seoul) {

  return `김서방은 ${seoul.indexOf('Kim')}에 있다`;
}

console.log(solution(["Jane", "Kim"])); // "김서방은 1에 있다"
/**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12931
 * @param {number} n 
 * @returns {number}
 */
function solution(n){
  let answer = 0;
  const stinrgNumber = n.toString().split('');  
  answer = stinrgNumber.reduce((acc, number) => acc + +number, 0);

  return answer;
}

console.log(solution(123)); // 6
console.log(solution(987)); // 24

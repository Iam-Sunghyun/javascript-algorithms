/**
 * 연습 문제 (https://programmers.co.kr/learn/courses/30/lessons/86051)
 * @param {number[]} numbers 
 * @returns {number} answer
 */
function solution(numbers) {
  var answer = 0;

  for(let i = 0; i < 10; i++){
    if(numbers.indexOf(i) === -1){
      answer += i;
    }
  }

  return answer;
}

console.log(solution([1,2,3,4,6,7,8,0]));

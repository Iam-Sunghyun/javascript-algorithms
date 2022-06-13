/**
 * 프로그래머스 **레벨 1** 
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12943
 * @param {number} num 
 * @returns {number}
 */
function solution(num) {
  let answer = num;
  let count = 0;
  while(answer !== 1){

    if(answer % 2 === 0)answer /= 2;
    else answer = answer * 3 + 1;
    
    count += 1;
    if(count >= 500) return -1;
  
  }
  return count;
}

console.log(solution(6)); // 8
console.log(solution(16)); // 4
console.log(solution(626331)); // -1

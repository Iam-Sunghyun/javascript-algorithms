/**
 * 프로그래머스 **레벨 1** 
 * 프로그래머스 월간 코드 챌린지 시즌1 (https://programmers.co.kr/learn/courses/30/lessons/68644)
 * @param {number[]} numbers 
 * @returns {number[]}
 */
function solution(numbers) {
  let answer = [];

  for(let i = 0; i < numbers.length - 1; i++){
    for(let j = i + 1; j < numbers.length; j++){
      answer.push(numbers[i] + numbers[j]);
    }
  }

  answer = [...new Set(answer)];
  answer.sort((a, b) => a - b);

  return answer;
}

console.log(solution([2,1,3,4,1]));
console.log(solution([5,0,2,7]));

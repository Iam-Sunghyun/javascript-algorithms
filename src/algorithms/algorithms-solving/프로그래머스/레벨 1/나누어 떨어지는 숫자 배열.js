/**
 * 프로그래머스 **레벨 1**
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12910
 * @param {number[]} arr 
 * @param {number} divisor 
 * @returns {number[]}
 */
function solution(arr, divisor) {

  const answer = arr.filter(element => {
    return element % divisor === 0 ? true : false;
  });

  return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

console.log(solution([5,9,7,10], 5)); // [5, 10]
console.log(solution([2,36,1,3], 1)); // [1, 2, 3, 36]
console.log(solution([3,2,6], 10)); // [-1]
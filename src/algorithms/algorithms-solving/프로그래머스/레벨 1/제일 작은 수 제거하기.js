/**
 * 프로그래머스 **레벨 1** 
 * 연습 문제 https://programmers.co.kr/learn/courses/30/lessons/12935
 * @param {number[]} arr 
 * @returns {number[]}
 */
function solution(arr) {
  arr.splice(arr.indexOf(Math.min(...arr)), 1);
  return arr.length >= 1 ? arr : [-1];
}

console.log(solution([4,3,2,1])); // [4,3,2]
console.log(solution([1,3,2,4])); // [4,3,2]
console.log(solution([10])); // [-1]
console.log(solution([])); // [-1]

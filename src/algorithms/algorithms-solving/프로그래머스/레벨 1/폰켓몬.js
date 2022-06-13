/**
 * 프로그래머스 **레벨 1** 
 * 찾아라 프로그래밍 마에스터 (https://programmers.co.kr/learn/courses/30/lessons/1845)
 * @param {string[]} nums 
 * @returns {number}
 */
function solution(nums) {
  // set 사용하면 매우 간단한 문제
  const answer = [...new Set(nums)];
  return answer.slice(0, nums.length / 2).length;
}

console.log(solution([3,1,2,3]));
console.log(solution([3,3,3,2,2,4]));
console.log(solution([3,3,3,2,2,2]));

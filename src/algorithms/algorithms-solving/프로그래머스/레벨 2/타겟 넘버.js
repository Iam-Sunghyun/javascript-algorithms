/**
 * 프로그래머스 **레벨 2**
 * 깊이/너비 우선 탐색(DFS/BFS) https://school.programmers.co.kr/learn/courses/30/lessons/43165
 * @param {number[]} numbers 
 * @param {number} target 
 * @returns {number} 
 */
function solution(numbers, target) {
  const length = numbers.length;
  let answer = 0;

  // 재귀를 이용한 기본적인 dfs 문제
  function dfs(level, result) {
    if (level === length) {
      if (result === target) {
        answer += 1;
      }
      return;
    }
    dfs(level + 1, result + numbers[level]);
    dfs(level + 1, result - numbers[level]);
  }

  dfs(0, 0);
  return answer;
}

console.log(solution([1, 1, 1, 1, 1], 3));
console.log(solution([4, 1, 2, 1], 4));
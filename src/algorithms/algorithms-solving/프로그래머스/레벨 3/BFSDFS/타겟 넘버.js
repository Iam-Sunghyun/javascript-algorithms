// https://school.programmers.co.kr/learn/courses/30/lessons/43165
function solution(numbers, target) {
  const length = numbers.length;
  let answer = 0;

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

/**
 * 프로그래머스 레벨 2
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12914
 */
function solution(n) {
  const answer = [1, 2];

  if (n <= 2) return answer[n - 1];

  for (let i = 2; i < n; i++) {
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1234567;
  }

  return answer[answer.length - 1];
}

console.log(solution(4)); // 5
console.log(solution(3)); // 3

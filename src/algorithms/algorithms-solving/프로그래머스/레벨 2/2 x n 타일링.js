/**
 * 프로그래머스 **레벨 2**
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12900
 * @param {number} n 
 * @returns {number}
 */
function solution(n) {
  // 기본적인 DP 문제
  const answer = new Array(n).fill(0);
  answer[0] = 1;
  answer[1] = 2;

  for (let i = 2; i < n; i++) {
    // 값이 너무 커지는 걸 방지하기 위해 문제에 제시된 1000000007로 나머지 연산 해주었음
    answer[i] = (answer[i - 1] + answer[i - 2]) % 1000000007;
  }

  return answer[n - 1];
}

console.log(solution(4)); // 5
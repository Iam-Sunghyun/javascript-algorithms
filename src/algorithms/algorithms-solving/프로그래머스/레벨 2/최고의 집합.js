/**
 * 프로그래머스 레벨 2
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12938
 * https://minnnne.tistory.com/45
 */
function solution(n, s) {
  if (s < n) return [-1];

  const share = Math.floor(s / n);
  const result = new Array(n).fill(share);
  let rest = s % n;
  let i = result.length - 1;

  while (rest > 0) {
    result[i] += 1;
    i--;
    rest--;
  }

  return result;
}

console.log(solution(2, 9)); // [4, 5]
console.log(solution(2, 1)); // [4, 5]
console.log(solution(4, 8)); // [4, 5]
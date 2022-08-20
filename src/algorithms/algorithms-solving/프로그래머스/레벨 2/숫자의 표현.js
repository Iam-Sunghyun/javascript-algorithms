/**
 * 프로그래머스 **레벨 2**
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/12924
 */
function solution(n) {
  // 투 포인터 아주 쉬운 효율성 문제
  if (n === 1) return 1;
  const N = Math.ceil(n / 2);
  let answer = 1;
  let left = 1;
  let right = 2;
  let acc = left + right;

  while (left <= N) {
    if (acc === n) {
      answer++;
      acc += ++right;
    }
    else if (acc < n) acc += ++right;
    else if (acc > n) acc -= left++;
  }
  return answer;
}

console.log(solution(15)); // 4
console.log(solution(20)); // 4

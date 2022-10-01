/**
 * 프로그래머스 레벨 2
 * Summer/Winter Coding(~2018) https://school.programmers.co.kr/learn/courses/30/lessons/12980
 */
function solution(n) {
  let count = 0;
  while (n !== 0) {
    if (n % 2 !== 0) {
      n -= 1;
      count += 1;
    } else {
      n /= 2;
    }
  }
  return count;
}

console.log(solution(5000)); // 5

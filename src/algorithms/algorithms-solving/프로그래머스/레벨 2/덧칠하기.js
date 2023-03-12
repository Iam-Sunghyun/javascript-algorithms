/**
 * 프로그래머스 레벨 2
 * 연습문제 https://school.programmers.co.kr/learn/courses/30/lessons/161989
 */
function solution(n, m, section) {
  let answer = 1;
  let tmp = section[0] + m - 1;

  for (let i = 1; i < section.length; i++) {
    if (tmp >= section[i]) continue;
    tmp = section[i] + m - 1;
    answer += 1;
  }

  return answer;
}

console.log(solution(8, 4, [1, 2, 3, 4, 5, 6, 7, 8])); // 2
console.log(solution(5, 4, [1, 3])); // 1
console.log(solution(4, 1, [1, 2, 3, 4])); // 4

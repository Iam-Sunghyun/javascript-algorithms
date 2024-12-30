// https://school.programmers.co.kr/learn/courses/30/lessons/142086
function solution(s) {
  const answer = [-1];

  for (let i = 1; i < s.length; i++) {
    let count = -1;
    for (let j = i - 1; j >= 0; j--) {
      if (s[i] === s[j]) {
        count = i - j;
        break;
      }
    }
    answer.push(count);
  }
  return answer;
}

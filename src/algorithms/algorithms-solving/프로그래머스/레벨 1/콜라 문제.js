// https://school.programmers.co.kr/learn/courses/30/lessons/132267
// 그림 그려보기
function solution(a, b, n) {
  let answer = 0;
  while (n >= a) {
    answer += Math.floor(n / a) * b;
    n = Math.floor(n / a) * b + (n % a);
  }
  return answer;
}

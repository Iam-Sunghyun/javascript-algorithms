// 백준 DP 14501번 실버3 https://www.acmicpc.net/problem/14501
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const day = +input.shift();
const T = input.map(n => Number(n.split(' ')[0]));
const P = input.map(n => Number(n.split(' ')[1]));

function solution(day, T, P) {
  const answer = new Array(day).fill(0);

  // 첫 날 상담이 마지막 날 전에 마무리 된다면 상담 수락, 아닐 경우 스킵
  answer[0] = T[0] <= day ? P[0] : 0;

  for (let i = 1; i < day; i++) {
    let max = 0;

    // i일 이전 날 중 상담 비용 최대치가 언제인지 찾기
    for (let j = i - 1; j >= 0; j--) {
      // i일 이전 날 중, 상담 비용이 최대인 날을 찾고,
      // 그 날의 상담이 i일을 넘어가지 않는다면 max에 저장
      if (T[j] + j - 1 < i) {
        max = Math.max(max, answer[j]);
      }
    }

    // i일에 잡힌 상담의 기간이 day 이전에 끝난다면 포함시켜준다
    if (T[i] + (i - 1) < day) {
      answer[i] = max + P[i];
      // day를 초과한다면 i 이전 날의 최대 상담 비용을 그대로 저장해준다
    } else {
      answer[i] = max;
    }
  }

  let max = 0;
  for (let i = 0; i < answer.length; i++) {
    max = Math.max(answer[i], max);
  }

  return max;
}

console.log(solution(day, T, P));
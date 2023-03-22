// 백준 삼성 SW 역량 테스트 기출 13458번 https://www.acmicpc.net/problem/13458
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const examinee = input[1].split(' ').map(Number);
const [B, C] = [+input[2].split(' ')[0], +input[2].split(' ')[1]];

function solution(examinee, B, C) {
  let answer = 0;
  for (let i = 0; i < examinee.length; i++) {
    if (examinee[i] - B <= 0) {
      answer += 1;
      continue;
    }
    answer += Math.ceil((examinee[i] - B) / C) + 1;
  }

  return answer;
}

console.log(solution(examinee, B, C));

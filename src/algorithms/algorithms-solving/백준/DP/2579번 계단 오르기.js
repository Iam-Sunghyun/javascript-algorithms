// 백준 DP 2579번 실버3 https://www.acmicpc.net/problem/2579
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);

function solution(stairs) {

  const answer = new Array(stairs.length).fill(0);
  // 점화식 대입에 필요한 최소 요소들 미리 계산
  answer[0] = stairs[0];
  answer[1] = stairs[0] + stairs[1];
  answer[2] = stairs[2] + Math.max(stairs[0], stairs[1]);

  // 입력이 너무 적어 점화식이 적용 안되는 경우 return
  if (stairs.length < 3) return answer[stairs.length - 1];

  for (let i = 0; i < stairs.length; i++) {
    for (let j = 3; j < stairs.length; j++) {
      // 점화식
      answer[j] = Math.max(answer[j - 3] + stairs[j - 1] + stairs[j], answer[j - 2] + stairs[j]);
    }
  }

  return answer[answer.length - 1];
}

console.log(solution(input));
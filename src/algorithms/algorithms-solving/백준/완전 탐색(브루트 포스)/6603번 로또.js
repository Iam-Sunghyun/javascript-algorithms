// 백준 수학(조합) 실버2 https://www.acmicpc.net/problem/6603
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));
input.pop();

function solution(length, numbers) {

  const result = [];   // 모든 경우를 저장할 배열
  const tmp = new Array(6).fill(0); // 특정 경우를 기록할 임시 배열

  // 조합 함수
  function combination(lv, index) {
    if (lv + 1 === 6) {
      result.push(tmp.join(' '));
      return;
    }

    // 불필요한 재귀 스킵용 -> 뽑은 개수 + 남은 개수 합이 6 미만이면 return
    if ((lv + 1) + (length - (index + 1)) < 6) {
      return;
    }

    for (let i = index + 1; i < length; i++) {
      tmp[lv + 1] = numbers[i];
      combination(lv + 1, i);
    }
  }

  // 6개를 뽑을 수 있는 범위까지 combination 호출
  for (let i = 0; i <= length - 6; i++) {
    tmp[0] = numbers[i];
    combination(0, i);
  }

  return result;
}

const answer = [];
for (let i = 0; i < input.length; i++) {
  answer.push(solution(input[i].shift(), input[i]));
}

for (let i = 0; i < answer.length; i++) {
  console.log(answer[i].join('\n'));
  console.log('');
}
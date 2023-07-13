// 백준 1475 구현 https://www.acmicpc.net/problem/1475
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {

  const counts = new Array(10).fill(0); // 필요 카드 수를 저장할 배열
  let maxValue = -Infinity;
  let maxIndex = 0;

  // 필요 카드 수 카운트 및 최대 카드 수 계산
  for (const i in input) {
    counts[input[i]] += 1;
    if (maxValue < counts[input[i]]) {
      maxValue = Math.max(maxValue, counts[input[i]]);
      maxIndex = Number(input[i]);
    }
  }

  // 최대로 필요한 카드가 6, 9 라면
  // 6, 9의 합을 2로 나눈 뒤 올린 값을 6, 9의 필요 카드 수로 재설정
  if (maxIndex === 6 || maxIndex === 9) {
    let sixAndNine = Math.ceil((counts[6] + counts[9]) / 2);
    counts[6] = sixAndNine;
    counts[9] = sixAndNine;
  }

  // 최대 필요 카드 다시 계산
  let answer = 0;
  for (const count of counts) {
    answer = Math.max(+count, answer);
  }

  return answer;
}

console.log(solution(input));
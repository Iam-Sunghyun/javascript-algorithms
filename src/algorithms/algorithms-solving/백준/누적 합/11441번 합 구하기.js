// 백준 누적합 실버3 https://www.acmicpc.net/problem/11441
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(numberList, ranges) {

  const prefixSum = new Array(numberList.length).fill(0);
  prefixSum[0] = numberList[0];

  // 누적 합 저장
  for (let i = 1; i < numberList.length; i++) {
    prefixSum[i] = prefixSum[i - 1] + numberList[i];
  }

  // 범위 합 구하기
  const answer = [];
  for (let i = 0; i < ranges.length; i++) {
    answer.push(prefixSum[ranges[i][1] - 1] - (prefixSum[ranges[i][0] - 2] || 0));
  }

  return answer.join('\n');
}

console.log(solution(input[1], input.slice(3)));
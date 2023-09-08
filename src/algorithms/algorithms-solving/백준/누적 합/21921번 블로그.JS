// 백준 누적합 실버3 https://www.acmicpc.net/problem/21921
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(X, visitList) {

  const prefixSum = [0];
  for (let i = 0; i < X; i++) {
    prefixSum[0] += visitList[i];
  }

  let max = prefixSum[0];
  for (let i = X; i < visitList.length; i++) {
    const tmp = prefixSum[i - X] + visitList[i] - visitList[i - X];
    prefixSum.push(tmp);
    max = Math.max(tmp, max);
  }

  let count = 0;
  for (let i = 0; i < prefixSum.length; i++) {
    if (prefixSum[i] === max) {
      count += 1;
    }
  }

  return max === 0 ? 'SAD' : [max, count].join('\n');
}

console.log(solution(input[0][1], input[1]));
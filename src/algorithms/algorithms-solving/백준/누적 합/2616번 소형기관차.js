// 백준 누적합,DP 골드3 https://www.acmicpc.net/problem/2616
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(passengerCar, maxCar) {

  const prefixSum = [0];
  for (let i = 0; i < maxCar; i++) {
    prefixSum[0] += passengerCar[i];
  }

  // DP로 누적합 계산
  let maxValue = prefixSum[0];
  for (let i = maxCar; i < passengerCar.length; i++) {
    let tmp = 0;
    for (let j = (i - maxCar) + 1; j <= i; j++) {
      tmp += passengerCar[j];
    }
    let bigger = Math.max(passengerCar[i] + passengerCar[i - 1] + prefixSum[i - 2], prefixSum[i - 1]);
    prefixSum.push(tmp);
  }


  return prefixSum;
}

console.log(solution(input[1].split(' ').map(Number), +input[2]));
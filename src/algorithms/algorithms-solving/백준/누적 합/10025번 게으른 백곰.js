// 백준 누적합 실버3 https://www.acmicpc.net/problem/10025
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(buckets) {

  // 우리 길이 계산
  let cageLength = 0;
  let allIce = 0;
  for (let i = 1; i < buckets.length; i++) {
    cageLength = Math.max(buckets[i][1], cageLength);
    allIce += buckets[i][0];
  }
  cageLength += 1;

  // K값이 우리 길이 / 2 보다 크거나 같은 경우 모든 얼음을 가져갈 수 있으므로 모든 얼음 합 return
  const K = buckets[0][1];
  if (Math.floor(cageLength / 2) <= K) {
    return allIce;
  }

  // 우리 배열 생성 및 얼음 개수 저장
  const cage = new Array(cageLength).fill(0);
  for (let i = 1; i < buckets.length; i++) {
    cage[buckets[i][1]] = buckets[i][0];
  }

  // 전체 누적합 계산을 위해 필요한 최소 누적합 계산 
  let tmp = 0;
  for (let i = 0; i < (K * 2) + 1; i++) {
    tmp += cage[i];
  }

  // 전체 누적합 계산하면서 최대 값 구하기
  let answer = 0;
  for (let i = K + 1; i < cage.length; i++) {
    tmp = tmp + (cage[i + K] || 0) - cage[i - K - 1];
    answer = Math.max(answer, tmp);
  }

  return answer;
}

console.log(solution(input));
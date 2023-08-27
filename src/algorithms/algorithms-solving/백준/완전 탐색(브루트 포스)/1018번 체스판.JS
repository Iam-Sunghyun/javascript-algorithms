// 백준 완전 탐색 실버4 https://www.acmicpc.net/problem/1018
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [n, m] = input.shift().split(' ').map(Number);

function solution(N, M, input) {

  let answer = +Infinity;
  // 가능한 8x8 범위 모두 확인
  for (let i = 0; i <= N - 8; i++) {
    for (let j = 0; j <= M - 8; j++) {
      answer = Math.min(checkRepaint(i, j, input), answer);
    }
  }

  return answer;
}

// 다시 칠해야하는 부분 확인하는 함수
function checkRepaint(x, y, chess) {
  
  // 만들 수 있는 2가지 방식의 체스판
  const board1 = ['WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW'];
  
  const board2 = ['BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB',
    'BWBWBWBW',
    'WBWBWBWB'];

  // 2가지 체스판 모두 대조하여 다시 칠해야되는 부분 확인
  let [count1, count2] = [0, 0];
  for (let i = x; i < x + 8; i++) {
    for (let j = y; j < y + 8; j++) {
      if (chess[i][j] !== board1[i - x][j - y]) {
        count1 += 1;
      }
      if (chess[i][j] !== board2[i - x][j - y]) {
        count2 += 1;
      }
    }
  }
  // 다시 칠해야 되는 부분이 적은 값 return
  return Math.min(count1, count2);
}

console.log(solution(n, m, input));

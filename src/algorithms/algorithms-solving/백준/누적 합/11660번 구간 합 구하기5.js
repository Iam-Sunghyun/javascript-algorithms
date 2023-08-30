// 백준 누적합 실버1 https://www.acmicpc.net/problem/11660
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(input) {
  const N = input[0][0];
  const start = [];
  const end = [];

  // 시작 좌표(x1, y1), 도착 좌표(x2, y2) 나누기 
  for (let i = N + 1; i < input.length; i++) {
    start.push(input[i].slice(0, 2));
    end.push(input[i].slice(2));
  }

  const table = input.slice(1, N + 1);
  // 누적합 계산 -> 같은 행에 대한 누적합만 계산하여 배열에 저장 O(n)
  for (let i = 0; i < N; i++) {
    for (let j = 1; j < N; j++) {
      table[i][j] += table[i][j - 1];
    }
  }

  const answer = [];
  // 누적합을 바탕으로 범위 값 계산
  for (let i = 0; i < start.length; i++) {
    const [startX, startY] = start[i];
    const [endX, endY] = end[i];
    let tmp = 0;
    for (let j = startX - 1; j <= endX - 1; j++) {
      tmp += table[j][endY - 1];
      tmp -= table[j][startY - 2] || 0;
    }
    answer.push(tmp);
  }

  return answer.join('\n');
}


console.log(solution(input));
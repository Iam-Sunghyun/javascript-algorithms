// 백준 구현 실버5 https://www.acmicpc.net/problem/2563
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(input) {

  // X, Y축 최대 값 계산
  let [maxX, maxY] = [0, 0];
  for (let i = 0; i < input.length; i++) {
    maxX = Math.max(input[i][0], maxX);
    maxY = Math.max(input[i][1], maxY);
  }
  maxX += 10;
  maxY += 10;

  // 너비 계산을 위한 2차원 배열
  const width = new Array(maxY).fill(0).map(n => new Array(maxX).fill(false));

  // 검은 부분을 true로 표시, 총합 계산
  let answer = 0;
  for (const [x, y] of input) {
    for (let i = y; i < y + 10; i++) {
      for (let j = x; j < x + 10; j++) {
        if (width[i][j] === false) {
          width[i][j] = true;
          answer += 1;
        }
      }
    }
  }

  return answer;
}

console.log(solution(input.slice(1)));

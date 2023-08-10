// 그래프 탐색 골드4 https://www.acmicpc.net/problem/16234
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(length, L, R, population) {

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  function DFS(x, y, index) {
    result[index] = result[index] + population[x][y] || population[x][y];
    for (let i = 0; i < 4; i++) {
      // 인접 국가와 인구 차이
      const adjecentCountryDifference = Math.abs(population[x + dx[i]]?.[y + dy[i]] - population[x][y]);
      // 인접 국가와 인구 차이가 L 이상 R 이하라면 실행
      if (L <= adjecentCountryDifference && adjecentCountryDifference <= R) {
        // 지도 범위 안이면서, 방문 안한 국가라면 방문(DFS)
        if (population[x + dx[i]]?.[y + dy[i]] !== undefined && check[x + dx[i]][y + dy[i]] === false) {
          check[x + dx[i]][y + dy[i]] = true;
          DFSpath.push([x + dx[i], y + dy[i]]);
          DFS(x + dx[i], y + dy[i], index);
        }
      }
    }

  }

  const result = [];
  let count = 0;
  let isEnd = false;

  const check = Array.from({ length: length }, () => new Array(length).fill(false));
  const DFSpath = [];

  while (!isEnd) {
    const check = [];
    const DFSpath = [];
    isEnd = true;
    for (let i = 0; i < length; i++) {
      for (let j = 0; j < length; j++) {
        check[i][j] = true;
        isEnd = false;
        DFS(i, j, count++);
        break;
      }
    }
  }

  return [result, DFSpath];
}

console.log(solution(...input.shift(), input));
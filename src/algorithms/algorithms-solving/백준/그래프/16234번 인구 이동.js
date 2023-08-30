// 그래프 탐색 골드4 https://www.acmicpc.net/problem/16234
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(N, L, R, map) {

  // 2차원 배열 4방향 좌표 값
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let count = 0;      // 인구 이동 발생 일수 저장용 
  let isEnd = false;  // 인구 이동이 발생하는지 안하는지 확인용

  // 인구 이동이 발생이 더이상 발생하지 않을 때까지 BFS 탐색
  while (!isEnd) {
    const visited = Array.from({ length: N }, () => new Array(N).fill(false));
    isEnd = true;

    // 모든 국가 탐색
    for (let i = 0; i < N; i++) {
      for (let j = 0; j < N; j++) {
        // 특정 국가 주변에 인구 이동이 발생하는지 확인
        let shouldOpenBorder = false;
        for (let k = 0; k < 4; k++) {
          if (map[i + dx[k]]?.[j + dy[k]] !== undefined) {
            const populationDiff = Math.abs(map[i][j] - map[i + dx[k]][j + dy[k]]);
            if (L <= populationDiff && populationDiff <= R) {
              shouldOpenBorder = true;
            }
          }
        }
        // 인구 이동이 발생한다면 BFS로 국경을 열 나라 탐색
        if (shouldOpenBorder && visited[i][j] === false) {
          visited[i][j] = true;
          isEnd = false;
          BFS(i, j, visited);
        }
      }
    }
    // 인구 이동이 발생했었다면 인구 이동 횟수 +1
    if (!isEnd) {
      count += 1;
    }
  }

  // 지도 탐색 BFS
  function BFS(startX, startY, check) {
    const queue = [[startX, startY]];
    const path = [[startX, startY]];  // 탐색한 나라 기록용
    let sum = map[startX][startY];    // 탐색한 나라 인구수 합 저장용

    while (queue.length > 0) {
      const [x, y] = queue.shift();
      for (let i = 0; i < 4; i++) {
        // 주변 국가가 범위 밖이거나, 방문 했던 곳이라면 continue;
        if (map[x + dx[i]]?.[y + dy[i]] === undefined || check[x + dx[i]][y + dy[i]] === true) {
          continue;
        }
        // 주변 국가가 국경을 열어야할 나라라면 queue에 push
        const populationDiff = Math.abs(map[x][y] - map[x + dx[i]][y + dy[i]]);
        if (L <= populationDiff && populationDiff <= R) {
          check[x + dx[i]][y + dy[i]] = true;
          queue.push([x + dx[i], y + dy[i]]);
          path.push([x + dx[i], y + dy[i]]);
          sum += map[x + dx[i]][y + dy[i]];
        }
      }
    }
    // 각 칸의 인구수 -> (연합의 인구수) / (연합을 이루고 있는 칸의 개수) 갱신
    const result = Math.floor(sum / path.length);
    for (const [countryX, countryY] of path) {
      map[countryX][countryY] = result;
    }
  }

  return count;
}

console.log(solution(input[0][0], input[0][1], input[0][2], input.slice(1)));
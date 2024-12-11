// https://school.programmers.co.kr/learn/courses/30/lessons/159993
function solution(maps) {
  // 시작, 레버 좌표 구하기
  let [start, lever] = [
    [0, 0],
    [0, 0],
  ];
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === "S") {
        start = [i, j];
      }
      if (maps[i][j] === "L") {
        lever = [i, j];
      }
    }
  }

  // 2차원 배열 좌표 이동 값
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  let answer = 0;

  // BFS
  function BFS(x, y, n) {
    const queue = [[x, y]];
    const check = Array.from({ length: maps.length }, () => new Array(maps[0].length).fill(false));
    let step = 0;
    check[x][y] = true;

    while (queue.length > 0) {
      const tmp = [];
      while (queue.length > 0) {
        const [nextX, nextY] = queue.pop();
        // start에서 시작하여 레버에 도달했다면 step 더해주고 return
        if (n === 0 && maps[nextX][nextY] === "L") {
          answer += step;
          return;
        }
        // 레버에서 시작하여 도착지점에 도달했다면 step 더해주고 return
        if (n === 1 && maps[nextX][nextY] === "E") {
          answer += step;
          return;
        }
        for (let i = 0; i < 4; i++) {
          if (
            check[nextX + dx[i]]?.[nextY + dy[i]] === false &&
            maps[nextX + dx[i]][nextY + dy[i]] !== "X"
          ) {
            check[nextX + dx[i]][nextY + dy[i]] = true;
            tmp.push([nextX + dx[i], nextY + dy[i]]);
          }
        }
      }

      // 다음 갈 곳이 없다면(전부 막혀 있다면 answer = -1, return)
      if (tmp.length === 0) {
        answer = -1;
        return;
      }
      // 다음 갈 곳이 있다면 queue에 push하고 BFS 이어서 수행
      for (let i = 0; i < tmp.length; i++) {
        queue.push(tmp[i]);
      }
      step += 1;
    }
  }

  // 3번째 인수 0 => start 출발, 1 => lever 출발
  // start에서 BFS 시작
  BFS(start[0], start[1], 0);
  // start에서 레버로 도달할 수 있다면 레버에서 BFS 한번 더 시작
  if (answer !== -1) {
    BFS(lever[0], lever[1], 1);
  }

  return answer;
}

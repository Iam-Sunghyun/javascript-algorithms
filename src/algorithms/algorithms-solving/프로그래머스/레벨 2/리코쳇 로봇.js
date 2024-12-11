// https://school.programmers.co.kr/learn/courses/30/lessons/169199
function solution(board) {
  // 시작 좌표 계산
  const start = [0, 0];
  for (let i = 0; i < board.length; i++) {
    let check = false;
    for (let j = 0; j < board[i].length; j++) {
      if (board[i][j] === "R") {
        start[0] = i;
        start[1] = j;
        check = true;
        break;
      }
    }
    if (check) break;
  }

  // 2차원 배열 좌표 이동 값
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 방문 체크 배열
  const check = Array.from({ length: board.length }, () => new Array(board[0].length).fill(false));

  // BFS
  function BFS() {
    const queue = [[start[0], start[1], 0]];
    while (queue.length > 0) {
      const [x, y, step] = queue.shift();
      if (board[x][y] === "G") {
        answer = Math.min(answer, step);
      }
      for (let i = 0; i < 4; i++) {
        let nx = x;
        let ny = y;
        // 벽이거나 배열 끝이 나올 때까지 이동
        while (
          board[nx + dx[i]]?.[ny + dy[i]] !== "D" &&
          board[nx + dx[i]]?.[ny + dy[i]] !== undefined
        ) {
          nx += dx[i];
          ny += dy[i];
        }

        // 이동한 위치 방문한 적 없다면 queue에 push
        if (check[nx][ny] === false) {
          check[nx][ny] = true;
          queue.push([nx, ny, step + 1]);
        }
      }
    }
  }

  let answer = +Infinity;
  check[start[0]][start[1]] = true;
  BFS();

  // 목표 도달 못 했다면 return -1
  return answer === +Infinity ? -1 : answer;
}

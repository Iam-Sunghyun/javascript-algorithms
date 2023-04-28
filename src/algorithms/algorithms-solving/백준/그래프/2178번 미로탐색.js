// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/2178
// BFS 탐색 시 주변 칸 queue에 push와 동시에 방문 체크해줘야 하는 것 주의
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

// DFS
function solution(input) {
  // 원본 복사
  const maze = input.slice(1).map(nums => nums.split(''));
  const [N, M] = [input[0].split(' ')[0] - 1, input[0].split(' ')[1] - 1];

  // 2차원 배열 4방향 이동 값
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  let minStep = +Infinity;

  function DFS(x, y, step) {
    // 목적지 도달 시 step수 업데이트
    if (x === N && y === M) {
      minStep = Math.min(minStep, step);
      return;
    }

    // 방문 체크
    maze[x][y] = '0';

    // 4방향 체크(상,우,하,좌 순)
    for (let i = 0; i < 4; i++) {
      if (maze[x + dx[i]]?.[y + dy[i]] === '1') {
        DFS(x + dx[i], y + dy[i], step + 1);
        maze[x + dx[i]][y + dy[i]] = '1'; // 방문 끝났으면 1로 변경
      }
    }
  }

  DFS(0, 0, 1);

  return minStep;
}

console.log(solution(input));

// DFS 시간초과 -> BFS로 풀이
function solution(input) {

  // 원본 복사(미로, 목적지)
  const maze = input.slice(1).map(nums => [...nums]);
  const [N, M] = [input[0].split(' ')[0] - 1, input[0].split(' ')[1] - 1];

  // 2차원 배열 4방향 이동 값
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // BFS
  function BFS(startX, startY) {
    const queue = [[startX, startY, 1]];
    let x, y, step;

    // 시작 위치 방문 체크
    maze[startX][startY] = '0';

    while (queue.length > 0) {
      // 이번에 탐색할 위치 shift 
      [x, y, step] = queue.shift();
      // 현재 탐색 위치가 목적지라면 걸음 수 return
      if (x === N && y === M) {
        return step;
      }

      // 현재 위치에서 갈 수 있는 칸 4방향(북동남서) 확인
      // ※ 갈 수 있는 칸 queue에 push하고, 동시에 방문 체크도 해줘야 중복 push가 발생하지 않음
      for (let i = 0; i < 4; i++) {
        if (maze[x + dx[i]]?.[y + dy[i]] === '1') {
          queue.push([x + dx[i], y + dy[i], step + 1]);
          // queue에 push한 위치 방문 체크
          maze[x + dx[i]][y + dy[i]] = '0';
        }
      }
      // 다음 탐색 넘어가기 전 걸음 수 +1
      step += 1;
    }
  }

  return BFS(0, 0);
}

console.log(solution(input));
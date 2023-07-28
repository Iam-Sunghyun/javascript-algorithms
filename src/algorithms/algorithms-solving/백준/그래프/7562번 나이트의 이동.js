// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/7562
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));
const cases = input[0][0];

function solution(mapSize, queenPosition, goal) {

  // 탐색에 사용할 지도(2차원 배열)
  const map = Array.from({ length: mapSize }, () => new Array(mapSize).fill(0));

  // 2차원 배열 상에서 퀸의 이동 방향(x행 y열 -> map[x][y])
  const x = [-2, -2, -1, 1, 2, 2, 1, -1];
  const y = [-1, 1, 2, 2, 1, -1, -2, -2];

  function BFS(position) {
    const queue = [position];
    let step = 0;
    while (queue.length > 0) {
      const nextPositions = [];

      // 다음 step때 탐색 할 위치를 모두 확인해주기 위해 while문으로 순회
      while (queue.length > 0) {
        const [nowX, nowY] = queue.pop();
        // 다음 이동 위치가 목적지라면 step 수 반환
        if (nowX === goal[0] && nowY === goal[1]) {
          return step;
        }
        for (let i = 0; i < 8; i++) {
          // 아니라면 다음 이동 위치가 지도 범위 안 인지, 방문안한 곳인지 확인 후 다음 방문 예약
          // 이때 미리 방문 체크 해줘야 중복 예약이 되지 않음
          if (map[nowX + x[i]]?.[nowY + y[i]] === 0) {
            map[nowX + x[i]][nowY + y[i]] = 1;
            nextPositions.push([nowX + x[i], nowY + y[i]]);
          }
        }
      }
      // 다음 방문할 곳이 존재한다면 queue에 push
      if (nextPositions.length > 0) {
        for (const next of nextPositions) {
          queue.push(next);
        }
      }
      step += 1;
    }
  }
  return BFS(queenPosition);
}

const answer = [];
for (let i = 1; i < cases * 3; i += 3) {
  answer.push(solution(input[i][0], input[i + 1], input[i + 2]));
}

console.log(answer.join('\n'));
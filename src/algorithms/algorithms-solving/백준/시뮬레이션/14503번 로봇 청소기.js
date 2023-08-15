// 백준 시뮬레이션 골드5 https://www.acmicpc.net/problem/14503
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(robotInfo, map) {
  // 시작 위치, 방향
  let [x, y, direction] = robotInfo;
  // 로봇 기본 방향 좌표(0북 1동 2남 3서) -> 반시계 회전 시 사용
  const counterClockX = [-1, 0, 1, 0];
  const counterClockY = [0, 1, 0, -1];
  // 로봇의 뒷 위치 좌표
  const backX = [1, 0, -1, 0];
  const backY = [0, -1, 0, 1];

  let count = 0;
  while (true) {
    // 현재 칸이 아직 청소되지 않은 경우, 현재 칸을 청소한다.
    if (map[x][y] === 0) {
      count += 1;
      map[x][y] = true;
    }
    // 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는지 확인
    let anyNotCleaned = false;
    for (let i = 0; i < 4; i++) {
      if (map[x + backX[i]]?.[y + backY[i]] === 0) {
        anyNotCleaned = true;
      }
    }
    // 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 없는 경우
    if (!anyNotCleaned) {
      const back = map[x + backX[direction]]?.[y + backY[direction]];
      // 바라보는 방향을 유지한 채로 한 칸 후진할 수 있다면 한 칸 후진하고 1번으로 돌아간다.
      if (back !== 1) {
        x = x + backX[direction];
        y = y + backY[direction];
        continue;
        // 바라보는 방향의 뒤쪽 칸이 벽이라 후진할 수 없다면 작동을 멈춘다.
      } else if (back === 1) {
        break;
      }
    }
    // 현재 칸의 주변 4칸 중 청소되지 않은 빈 칸이 있는 경우
    if (anyNotCleaned) {
      for (let i = 0; i < 4; i++) {
        // 반시계 방향으로 90도 회전
        direction = direction - 1 === -1 ? 3 : direction - 1;
        // 바라보는 방향을 기준으로 앞쪽 칸이 청소되지 않은 빈 칸인 경우 한 칸 전진한다.
        if (map[x + counterClockX[direction]]?.[y + counterClockY[direction]] === 0) {
          x = x + counterClockX[direction];
          y = y + counterClockY[direction];
          break;
        }
      }
    }
  }
  return count;
}

console.log(solution(input[1], input.slice(2)));
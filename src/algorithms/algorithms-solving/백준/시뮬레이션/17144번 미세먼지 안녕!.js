// 백준 시뮬레이션 골드4 https://www.acmicpc.net/problem/17144
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(R, C, T, room) {
  const airCleaner = []; // 청정기 위치 x좌표(행) 저장용
  // 2차원 배열 4방향 값 
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  // 청정기 위치 확인
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (room[i][j] === -1) {
        airCleaner.push(i);
      }
    }
  }

  // 미세먼지 확산
  function dirtSpread() {
    const dirtAmount = Array.from({ length: R }, (n) => new Array(C).fill(0)); // 미세먼지 확산양 계산용 배열
    // 미세먼지 확산되는 양 계산
    for (let x = 0; x < R; x++) {
      for (let y = 0; y < C; y++) {
        const spreadDirts = Math.floor(room[x][y] / 5);  // 확산되는 미세먼지
        if (room[x][y] === 0 || room[x][y] === -1 || spreadDirts === 0) {  // 미세먼지 없으면 continue;
          continue;
        }
        let spreaded = 0;  // 특정 칸 미세먼지가 확산되는 양 총량 저장용
        for (let i = 0; i < 4; i++) {
          const around = room[x + dx[i]]?.[y + dy[i]];     // 미세먼지 주변 위치 확인
          if (around !== undefined && around !== -1 && spreadDirts !== 0) {   // 미세먼지 주변이 방 범위 안이면서 공기청정기가 아니면 확산
            dirtAmount[x + dx[i]][y + dy[i]] += spreadDirts;
            spreaded += spreadDirts;
          }
        }
        dirtAmount[x][y] -= spreaded; // 확산된 만큼 빼준다
      }
    }
    // 미세먼지 확산 적용
    for (let i = 0; i < R; i++) {
      for (let j = 0; j < C; j++) {
        room[i][j] += dirtAmount[i][j];
      }
    }
  }

  // 공기청정기 윗부분 작동
  function airCleanUp() {
    for (let i = airCleaner[0] - 2; i >= 0; i--) {
      room[i + 1][0] = room[i][0];
    }
    for (let i = 0; i < C - 1; i++) {
      room[0][i] = room[0][i + 1];
    }
    for (let i = 1; i <= airCleaner[0]; i++) {
      room[i - 1][C - 1] = room[i][C - 1];
    }
    for (let i = C - 2; i > 0; i--) {
      room[airCleaner[0]][i + 1] = room[airCleaner[0]][i];
    }
    room[airCleaner[0]][1] = 0;
  }

  // 청정기 아랫부분 적용
  function airCleanDown() {
    for (let i = airCleaner[1] + 2; i < R; i++) {
      room[i - 1][0] = room[i][0];
    }
    for (let i = 1; i < C; i++) {
      room[R - 1][i - 1] = room[R - 1][i];
    }
    for (let i = R - 2; i >= airCleaner[1]; i--) {
      room[i + 1][C - 1] = room[i][C - 1];
    }
    for (let i = C - 2; i > 0; i--) {
      room[airCleaner[1]][i + 1] = room[airCleaner[1]][i];
    }
    room[airCleaner[1]][1] = 0;
  }

  // T번 공기청정 실시
  for (let i = 0; i < T; i++) {
    dirtSpread();
    airCleanUp();
    airCleanDown();
  }
  
  // 남은 미세먼지 합산
  let answer = 0;
  for (let i = 0; i < R; i++) {
    for (let j = 0; j < C; j++) {
      if (room[i][j] === -1) {
        continue;
      }
      answer += room[i][j];
    }
  }
  return answer;
}

console.log(solution(...input[0], input.slice(1)));
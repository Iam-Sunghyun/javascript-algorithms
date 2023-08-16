// https://www.acmicpc.net/problem/17144
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(R, C, T, room) {
  // 미세먼지 확산양 계산용 배열과 4방향 값 
  const dirtAmount = Array.from({ length: R }, (n) => new Array(C).fill(0));
  const airCleaner = []; // 청정기 위치 x좌표(행) 저장용

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 청정기 위치 확인
  for (let i = 0; i < C; i++) {
    for (let j = 0; j < R; j++) {
      if (room[i][j] === -1) {
        airCleaner.push(i);
      }
    }
  }
  // 미세먼지 확산
  function dirtSpread() {
    // 미세먼지 확산되는 양 계산
    for (let x = 0; x < R; x++) {
      for (let y = 0; y < C; y++) {
        if (room[x][y] < 1) {  // 미세먼지 없으면 continue;
          continue;
        }
        let spreaded = 0;  // 특정 칸 미세먼지가 확산되는 양 총량 저장용
        for (let i = 0; i < 4; i++) {
          const around = room[x + dx[i]]?.[y + dy[i]]; // 미세먼지 주변 위치 값 확인 
          if (around !== undefined && around !== -1) {   // 미세먼지 주변이 방 범위 안이면서 공기청정기가 아니면 확산
            dirtAmount[x + dx[i]][y + dy[i]] += Math.floor(room[x][y] / 5);
            spreaded += Math.floor(room[x][y] / 5);
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
    const rightMiddle = [];
    const leftMiddle = [];
    // 청정기 윗부분 청정기 적용
    for (let i = airCleaner[0] - 1; i > 0; i--) {
      rightMiddle.push(room[i][C - 1]);
      leftMiddle.splice(0, 0, room[i][0]);
    }

    const areaToBeCleaned = [...room[airCleaner[0]], ...rightMiddle, ...room[0].reverse(), ...leftMiddle]; // 청정기 바람이 닿는 영역
    const afterCleaned = [-1, 0, ...areaToBeCleaned.slice(1, areaToBeCleaned.length - 1)];  // 1칸씩 밀기

    // 청정기 적용된 윗부분 데이터 room에 업데이트하기
    room[airCleaner[0]] = afterCleaned.splice(0, C);
    for (let i = airCleaner[0] - 1; i > 0; i--) {
      room[i][C - 1] = afterCleaned.shift();
      room[i][0] = afterCleaned.pop();
    }
    room[0] = afterCleaned.reverse().slice();

  }
  // 청정기 아랫부분 적용
  function airCleanDown() {
    const rightMiddle = [];
    const leftMiddle = [];
    for (let i = airCleaner[1] + 1; i < R - 1; i++) { // 청정기 윗부분 청정기 적용
      rightMiddle.push(room[i][C - 1]);
      leftMiddle.splice(0, 0, room[i][0]);
    }

    const areaToBeCleaned = [...room[airCleaner[1]], ...rightMiddle, ...room[R - 1].reverse(), ...leftMiddle]; // 청정기 바람이 닿는 영역
    const afterCleaned = [-1, 0, ...areaToBeCleaned.slice(1, areaToBeCleaned.length - 1)];  // 1칸씩 밀기

    // 청정기 적용된 아랫부분 데이터 room에 업데이트하기
    room[airCleaner[1]] = afterCleaned.splice(0, C);
    for (let i = airCleaner[1] + 1; i < R - 1; i++) {
      room[i][C - 1] = afterCleaned.shift();
      room[i][0] = afterCleaned.pop();
    }
    room[R - 1] = afterCleaned.reverse().slice();
  }

  // T번 공기청정 실시
  for (let i = 0; i < T; i++) {
    dirtSpread();
    airCleanUp();
    airCleanDown();
    // console.log(room)
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
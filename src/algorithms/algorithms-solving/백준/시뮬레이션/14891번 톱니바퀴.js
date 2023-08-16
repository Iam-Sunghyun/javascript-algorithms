// 백준 시뮬레이션 골드5 https://www.acmicpc.net/problem/14891
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const gear = input.slice(0, 4);
const rotationList = input.slice(5).map(r => r.split(' ').map(Number));

function solution(gears, rotations) {

  // 톱니 회전 방법 계산 및 적용 [톱니 번호, 방향]
  for (const [number, direction] of rotations) {
    const result = [0, 0, 0, 0]; // 회전 연산 기록용
    result[number - 1] = direction;

    // number톱니 왼쪽에 위치한 톱니들 회전 방법 확인
    for (let i = number - 1; i > 0; i--) {
      // i-1번 톱니와 i번 톱니 극이 다르고 i번 톱니가 움직이지 않음('stay') 상태가 아니라면 i-1 톱니를 i톱니 반대 방향으로 회전
      // 그 외의 경우(else)는 i-1번 톱니 고정
      if (gears[i - 1][2] !== gears[i][6] && result[i] !== 'stay') {
        result[i - 1] = result[i] === 1 ? -1 : 1;
      } else {
        result[i - 1] = 'stay';
      }
    }
    // number톱니 오른쪽에 위치한 톱니들 회전 방법 확인
    for (let i = number - 1; i < 3; i++) {
      // i+1번 톱니와 i번 톱니 극이 다르고 i번 톱니가 움직이지 않음('stay') 상태가 아니라면 i+1 톱니를 i톱니 반대 방향으로 회전
      // 그 외의 경우(else)는 i+1번 톱니 고정
      if (gears[i][2] !== gears[i + 1][6] && result[i] !== 'stay') {
        result[i + 1] = result[i] === 1 ? -1 : 1;
      } else {
        result[i + 1] = 'stay';
      }
    }

    // 톱니 회전 적용
    for (let i = 0; i < result.length; i++) {
      if (result[i] === 'stay') {
        continue;
      }
      if (result[i] === 1) {
        gears[i] = gears[i].at(-1) + gears[i].slice(0, 7);
      } else if (result[i] === -1) {
        gears[i] = gears[i].slice(1) + gears[i][0];
      }
    }
  }
  // 점수 계산
  let answer = 0;
  let score = 1;
  for (const gear of gears) {
    if (gear[0] === '1') {
      answer += score;
    }
    score *= 2;
  }
  return answer;
}

console.log(solution(gear, rotationList));
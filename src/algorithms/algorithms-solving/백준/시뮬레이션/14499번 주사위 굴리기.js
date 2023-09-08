// 백준 시뮬레이션 골드4 https://www.acmicpc.net/problem/14499
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));
const n = input[0][0];
const [X, Y] = [input[0][2], input[0][3]];
const map = input.slice(1, input[0][0] + 1);
const commands = input[n + 1];

function solution(x, y, map, commands) {

  // 주사위 가로, 세로
  //   2
  // 4 1 3 6
  //   5
  //   6
  const row = [0, 0, 0, 0];       // 4 1 3 6 (1 윗면, 4 서쪽, 3 동쪽, 6 바닥 면)
  const column = [0, 0, 0, 0];    // 2 1 5 6 (2 북쪽, 5 남쪽, 1 윗면, 6 바닥 면)

  // 바닥, 천장면 인덱스
  let bottom = 3;
  let ceil = 1;

  const answer = [];

  // 명령어 실행
  for (let i = 0; i < commands.length; i++) {
    const direction = commands[i];
    let check = false;
    if (direction === 1 && map[x][y + 1] !== undefined) {
      row.splice(0, 0, row.pop());
      column[bottom] = row[bottom];
      column[ceil] = row[ceil];
      y = y + 1;
      check = true;
    } else if (direction === 2 && map[x][y - 1] !== undefined) {
      row.push(row.shift());
      column[bottom] = row[bottom];
      column[ceil] = row[ceil];
      y = y - 1;
      check = true;
    } else if (direction === 3 && map[x - 1]?.[y] !== undefined) {
      column.push(column.shift());
      row[bottom] = column[bottom];
      row[ceil] = column[ceil];
      x = x - 1;
      check = true;
    } else if (direction === 4 && map[x + 1]?.[y] !== undefined) {
      column.splice(0, 0, column.pop());
      row[bottom] = column[bottom];
      row[ceil] = column[ceil];
      x = x + 1;
      check = true;
    }

    if (!check) continue;

    if (map[x][y] === 0 && column[bottom] !== 0) {
      map[x][y] = column[bottom];
    } else if (map[x][y] !== 0) {
      column[bottom] = map[x][y];
      row[bottom] = map[x][y];
      map[x][y] = 0;
    }
    answer.push(column[ceil]);
  }

  return answer.join('\n');
}

console.log(solution(X, Y, map, commands));
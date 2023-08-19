// 백준 구현 골드4 https://www.acmicpc.net/problem/3190
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(n => Number.isInteger(+n) ? Number(n) : n));

function solution(input) {

  const N = input[0][0];      // 보드 크기
  let apples = input[1][0];   // 사과 개수
  const applePosition = input.slice(2, 2 + apples); // 사과 위치
  const snakeTurning = input.slice(2 + apples + 1); // 뱀 회전 정보
  snakeTurning.push([100, '']);   // 회전이 끝나고 벽까지 마지막 전진을 위한 값

  const board = Array.from({ length: N }, n => new Array(N).fill(0));  // 보드

  // 사과 위치시키기
  for (const [x, y] of applePosition) {
    board[x - 1][y - 1] = 'x';
  }

  // 방향 값들
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];
  let currentDirection = 0; // 0번은 기본 값으로 2차원 배열에서 동쪽으로 이동하는 방향

  // 뱀 전체 위치 좌표 [x, y], 0번이 머리, 1이상은 몸통
  const snake = [[0, 0]];

  // 뱀 이동 시작
  board[0][0] = 1; // 뱀 시작 위치 기록
  let count = 0;   // 뱀 이동 시간 기록
  for (const [forward, direction] of snakeTurning) {

    for (let i = count; i < forward; i++) {
      count += 1;
      const newHead = [snake[0][0] + dx[currentDirection], snake[0][1] + dy[currentDirection]]; // 뱀 이동 정보에 따라 머리 이동

      if (board[newHead[0]]?.[newHead[1]] === undefined || board[newHead[0]][newHead[1]] === 1) {   // 전진한 머리 위치가 범위 밖이거나 몸통이라면
        return count;
      } else if (board[newHead[0]][newHead[1]] === 'x') {    // 머리 위치에 사과가 있다면 머리만 늘리고 사과 제거
        snake.splice(0, 0, [newHead[0], newHead[1]]);
      } else {  // 그 외 몸통 하나 줄이기
        snake.splice(0, 0, [newHead[0], newHead[1]]);
        const tail = snake.pop();
        board[tail[0]][tail[1]] = 0;
      }

      // 머리통 전진
      board[newHead[0]][newHead[1]] = 1;
      console.log(board.join('\n') + ' ' + count);
      console.log('---------------------');
    }
    // 방향에 따라 2차원 배열에서 이동해야 될 방향 변경
    // direction이 D라면 dx, dy 배열에서 시계 방향(오른쪽)으로 회전된 방향을 가리키도록 currentDirection +1. L은 그 반대
    if (direction === 'D') {
      currentDirection = (currentDirection + 1) % 4;
    } else if (direction === 'L') {
      currentDirection = currentDirection - 1 < 0 ? 3 : currentDirection - 1;
    }
  }

  return count;
}

console.log(solution(input));
// 백준 그래프 탐색 골드5 https://www.acmicpc.net/problem/7576
// 30번줄 shift() 사용해서 시간초과 발생했었음
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(input) {

  const box = input.slice(1);  // 입력 복사
  // 처음 주어진 익은 토마토 위치 확인
  const queue = [];
  for (let i = 0; i < box.length; i++) {
    for (let j = 0; j < box[i].length; j++) {
      if (box[i][j] === 1) queue.push([i, j]);
    }
  }

  // 2차원 배열 탐색용 4방향 값
  const dx = [-1, 0, 1, 0]; // 행
  const dy = [0, 1, 0, -1]; // 열

  // BFS
  function BFS() {
    let day = 0;
    let x, y;

    // 상자에 더이상 익을 수 있는 토마토가 없을 때까지
    while (queue.length > 0) {
      const tmp = [];
      let check = false;

      // queue에 삽입된 익은 토마토 좌표 '모두' BFS로 방문
      while (queue.length > 0) {
        [x, y] = queue.pop(); 
        // queue에서 pop한 토마토의 4방향 중에 익지 않은 토마토가 있는지 확인
        for (let j = 0; j < 4; j++) {
          if (box[x + dx[j]]?.[y + dy[j]] === 0) {
            box[x + dx[j]][y + dy[j]] = 1;    // 익지 않은 토마토를 새롭게 익은 것으로 체크
            tmp.push([x + dx[j], y + dy[j]]); // 새롭게 익게 된 토마토 위치 tmp에 임시 저장
            check = true;
          }
        }
      }
      if (check) day += 1;  // 새롭게 익은 토마토가 있다면 하루를 카운트 해준다
      queue.push(...tmp);   // 새롭게 익은 토마토 좌표를 queue에 추가
    }
    return day;
  }
  const answer = BFS();

  // 가로막혀서 익을 수 없는 토마토가 있는지 확인
  let hasZero = false;
  for (let i = 0; i < box.length; i++) {
    if (box[i].includes(0)) {
      hasZero = true;
      break;
    }
  }

  if (hasZero === true) return -1;  // 가로막혀서 익을 수 없는 토마토가 있다면
  if (answer === 0) return 0;       // 처음부터 모든 토마토가 익어있었다면

  return answer;
}

const arr = new Array(1000).fill(0).map(n => new Array(1000).fill(0));
arr[999][999] = 1;

console.log(solution(arr));
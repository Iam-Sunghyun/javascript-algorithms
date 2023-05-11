// 백준 그래프 탐색 골드5 https://www.acmicpc.net/problem/10026
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(''));

function solution(input) {

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  /**
   * BFS
   * @param {number} startX 시작 X
   * @param {number} startY 시작 Y
   * @param {boolean} isRGweak 적록색약 여부
   * @param {boolean[][]} check 방문 체크 배열
   */
  function BFS(startX, startY, isRGweak, check) {
    // 적록색약 이라면 G -> R로 변경하여 input 복사, 적록색약 아니라면 input 그대로 복사
    const area = isRGweak ? input.map(arr => arr.map(color => color === 'G' ? 'R' : color)) : input.slice();
    const queue = [[startX, startY]];
    check[startX][startY] = true;
    // BFS 순회 시작
    while (queue.length > 0) {
      const [x, y] = queue.pop();
      for (let i = 0; i < 4; i++) {
        const next = area[x + dx[i]]?.[y + dy[i]];
        if (next && next === area[x][y] && check[x + dx[i]][y + dy[i]] === false) {
          queue.push([x + dx[i], y + dy[i]]);
          check[x + dx[i]][y + dy[i]] = true;
        }
      }
    }
  }

  // 적록색약 아닌 경우 BFS 체크배열
  const check1 = Array.from({ length: input.length }, () => new Array(input.length).fill(false));
  // 적록색약인 경우 BFS 체크배열
  const check2 = Array.from({ length: input.length }, () => new Array(input.length).fill(false));

  // 적록색약이 아닌 경우, 적록색약인 경우에 대하여 BFS 
  const answer = [0, 0];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      // 적록색약이 아닌 경우
      if (check1[i][j] === false) {
        BFS(i, j, false, check1);
        answer[0] += 1;
      }
      // 적록색약인 경우
      if (check2[i][j] === false) {
        BFS(i, j, true, check2);
        answer[1] += 1;
      }
    }
  }

  return answer.join(' ');
}

console.log(solution(input.slice(1)));
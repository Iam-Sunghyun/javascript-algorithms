// 백준 그래프 탐색 실버1 https://www.acmicpc.net/problem/2667
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(input) {

  const maps = input.slice(1).map(n => n.split('').map(n => +n));
  const dx = [-1, 0, 1, 0]; // 행
  const dy = [0, 1, 0, -1]; // 열

  /**
   * @param {number} x 행
   * @param {number} y 열
   * @param {number} n 단지 넘버 
   */
  function DFS(x, y, n) {
    answer[n] = answer[n] ? answer[n] + 1 : 1; // n단지 집 개수에 +1
    maps[x][y] = 0;   // 방문 체크

    // x, y 좌표의 집 주변 4방(북동남서) 탐색
    for (let i = 0; i < 4; i++) {
      // 4방 중 하나가 지도 범위 안이고, 1(집이 있는 곳) 이라면 방문
      if (maps[x + dx[i]]?.[y + dy[i]] === 1) {
        DFS(x + dx[i], y + dy[i], n);       // 다음 위치로 DFS
      }
    }
  }

  let index = 0; // 몇 번째 단지인지 기록하기 위한 인덱스 
  let answer = []; // index번 단지의 집 개수 저장용 배열

  // 지도 전체 돌면서 DFS
  for (let i = 0; i < maps.length; i++) {
    for (let j = 0; j < maps[i].length; j++) {
      if (maps[i][j] === 1) {
        DFS(i, j, index++);
      }
    }
  }

  answer.sort((a, b) => a - b);
  return [answer.length, ...answer].join('\n');
}

console.log(solution(input));
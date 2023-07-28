// 백준 그래프 탐색 골드4 https://www.acmicpc.net/problem/1987
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(str => str.split(''));

// 재귀 - 시간 초과
function solution(map) {

  // x, y축 이동 방향(상우하좌)
  const xAxis = [-1, 0, 1, 0];
  const yAxis = [0, 1, 0, -1];

  const checkSet = new Set([input[0][0]]); // 방문 여부 체크용
  let maxSteps = -Infinity;

  function DFS(x, y, steps, check) {

    // 더이상 재귀가 발생하지 않는지(더 갈 곳이 없는지) 확인용 boolean
    let isEnd = true;
    for (let i = 0; i < 4; i++) {
      // 다음 탐색 위치가 map 범위 안이면서, 방문했던 적이 없는 알파벳인지 확인
      if (map[x + xAxis[i]]?.[y + yAxis[i]] && !check.has(map[x + xAxis[i]][y + yAxis[i]])) {
        isEnd = false;                                 // 탐색이 끝이 아니라는 것을 확인
        check.add(map[x + xAxis[i]][y + yAxis[i]]);    // 방문으로 체크
        DFS(x + xAxis[i], y + yAxis[i], steps + 1);    // 다음 DFS 탐색
        check.delete(map[x + xAxis[i]][y + yAxis[i]]); // 방문 후 되돌아갈 때 방문 체크 해제
      }
    }
    // 더 갈곳이 없다면 탐색 걸음 수가 최대 값인지 확인
    if (isEnd) {
      maxSteps = Math.max(maxSteps, steps);
    }
  }

  DFS(0, 0, 1, checkSet);

  return maxSteps;
}

console.log(solution(input));
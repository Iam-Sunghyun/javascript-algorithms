// https://www.acmicpc.net/problem/2573
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(area) {
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const decreaseCount = Array.from({ length: area.length }, () => new Array(area[0].length));
  const check = Array.from({ length: area.length }, () => new Array(area[0].length));
  let year = 0;
  while (true) {
    // 1년에 녹아내리는 빙하 규모 계산
    decreaseCount.map((n) => n.fill(0));
    for (let i = 0; i < area.length; i++) {
      for (let j = 0; j < area[i].length; j++) {
        for (let k = 0; k < 4; k++) {
          if (area[i + dx[k]]?.[j + dy[k]] === 0 && area[i][j] !== 0) {
            decreaseCount[i][j] += 1;
          }
        }
      }
    }

    // 빙하 녹이기
    for (let i = 0; i < decreaseCount.length; i++) {
      for (let j = 0; j < decreaseCount[i].length; j++) {
        area[i][j] -= decreaseCount[i][j];
        if (area[i][j] < 0) area[i][j] = 0;
      }
    }

    // 녹이고 난 후 빙하 수 계산
    let glaciers = 0;
    let bool = false;
    check.map((n) => n.fill(false)); // 방문 여부 확인용 배열 초기화
    for (let i = 0; i < area.length; i++) {
      for (let j = 0; j < area[i].length; j++) {
        // 빙하이면서 방문한 적 없다면 빙하 범위 확인하러 BFS
        if (area[i][j] !== 0 && check[i][j] === false) {
          check[i][j] = true;
          BFS(i, j, check);
          glaciers += 1; // 빙하 수 + 1
          bool = true;
        }
      }
    }
    year += 1;

    // 빙하 수가 2 덩이를 넘어섰다면 지난 년수 return
    if (glaciers > 1) return year;
    // 빙하가 다 녹아 없어졌는데 위 조건문이 실행 안됐다면(2 덩이 이상 안됐다면) return 0;
    if (bool === false) return 0;
  }

  // 빙하 범위 계산용 BFS
  function BFS(x, y, check) {
    const queue = [[x, y]];
    let next = null;

    while (queue.length > 0) {
      next = queue.pop();
      for (let i = 0; i < 4; i++) {
        if (
          area[next[0] + dx[i]]?.[next[1] + dy[i]] !== 0 &&
          check[next[0] + dx[i]][next[1] + dy[i]] === false
        ) {
          check[next[0] + dx[i]][next[1] + dy[i]] = true;
          queue.push([next[0] + dx[i], next[1] + dy[i]]);
        }
      }
    }
  }
}

console.log(solution(input.slice(1)));

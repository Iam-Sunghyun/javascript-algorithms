// 백준 그래프 탐색 골드4 https://www.acmicpc.net/problem/2636
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(height, width, cheese) {

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  const answer = [];

  // 치즈 면적 계산
  let areaOfCheese = 0;
  for (let i = 1; i < height - 1; i++) {
    for (let j = 1; j < width - 1; j++) {
      if (cheese[i][j] === 1) {
        areaOfCheese += 1;
      }
    }
  }

  function bfs(startX, startY) {
    const queue = [[startX, startY]]; 
    const check = Array.from({ length: height }, () => new Array(width).fill(false)); // 방문 체크용 배열
    let area = 0;
    check[startX][startY] = true;

    while (queue.length > 0) {
      const [x, y] = queue.pop();
      for (let i = 0; i < 4; i++) {
        // 다음 위치가 치즈라면 면적(area)에 합산해주고 중복 방문 방지를 위해 방문 체크와 녹은 걸 기록해줌
        // (queue에 push는 하지 않음) 
        if (cheese[x + dx[i]]?.[y + dy[i]] === 1) {
          check[x + dx[i]][y + dy[i]] = true;
          cheese[x + dx[i]][y + dy[i]] = 0;
          area += 1;
          continue;
        // 다음 위치가 치즈가 아니고 방문한 적도 없다면 방문 체크 후 queue에 push
        } else if (cheese[x + dx[i]]?.[y + dy[i]] === 0 && check[x + dx[i]]?.[y + dy[i]] === false) {
          check[x + dx[i]][y + dy[i]] = true;
          queue.push([x + dx[i], y + dy[i]]);
        }
      }
    }
    return area;
  }

  // 녹은 치즈 범위 === 전체 치즈 범위까지(다 녹을 때까지) bfs 호출
  // 각 bfs 마다 녹은 치즈 범위를 answer 배열에 기록
  let sum = 0;
  while (sum !== areaOfCheese) {
    const result = bfs(0, 0);
    answer.push(result);
    sum += result;
  }

  return [answer.length, answer.at(-1)].join('\n');
}

console.log(solution(...input.shift(), input));
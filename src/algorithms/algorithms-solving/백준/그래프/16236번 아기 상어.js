// 백준 그래프 탐색 골드3 https://www.acmicpc.net/problem/16236
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(str => str.split(' ').map(Number));

function solution(input) {

  // 상어 초기 위치 확인
  const start = [];
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      if (input[i][j] === 9) {
        start.push(i, j);
        input[i][j] = 0;
        break;
      }
    }
    if (start.length > 0) break;
  }

  const dx = [-1, 1, 0, 0];
  const dy = [0, 0, -1, 1];
  let shark = 2;
  let exp = 2;
  let answer = [0];

  function BFS(i, j) {
    const check = Array.from({ length: input.length }, () => new Array(input.length).fill(false));
    let queue = [[i, j]];
    let step = 0;
    check[i][j] = true;

    while (queue.length > 0) {
      let tmp = [];
      step += 1;

      while (queue.length > 0) {
        const [x, y] = queue.shift();
        // console.log(x, y)
        for (let i = 0; i < 4; i++) {
          const next = input[x + dx[i]]?.[y + dy[i]];
          if (check[x + dx[i]]?.[y + dy[i]] === false) {
            if (next === 0 || next === shark) {
              tmp.push([x + dx[i], y + dy[i]]);
              check[x + dx[i]][y + dy[i]] = true;
            } else if (next < shark) {
              // console.log(`${[x + dx[i], y + dy[i]]} 도착 ${step} 레벨: ${shark} step: ${ans += step}`)
              exp -= 1;
              if (exp === 0) {
                shark += 1;
                exp = shark;
              }
              tmp = [];

              answer.push(step);
              input[x + dx[i]][y + dy[i]] = 0;
              BFS(x + dx[i], y + dy[i]);
              break;
            }
          }
        }
      }
      for (let i = 0; i < tmp.length; i++) {
        queue.push(tmp[i]);
      }
    }
  }

  BFS(start[0], start[1]);

  return answer.length === 0 ? 0 : [answer, answer.reduce((acc, n) => acc + n), input];
}

console.log(solution(input.slice(1)));
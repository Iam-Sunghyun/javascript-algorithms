// https://www.acmicpc.net/problem/14502
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(area) {
  const check = Array.from({ length: area.length }, (_, i) =>
    new Array(area[i].length).fill(false)
  );

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const virus = [];
  for (let i = 0; i < area.length; i++) {
    for (let j = 0; j < area[i].length; j++) {
      if (area[i][j] === 2) virus.push([i, j]);
    }
  }

  function BFS(start) {
    const queue = [];
    for (let i = 0; i < start.length; i++) {
      queue.push(start[i]);
    }
    const maps = area.map((n) => n.slice());
    let next;
    while (queue.length > 0) {
      while (queue.length > 0) {
        const tmp = [];
        next = queue.pop();
        check[next[0]][next[1]] = true;
        for (let i = 0; i < 4; i++) {
          if (
            maps[next[0] + dx[i]]?.[next[1] + dy[i]] === 0 &&
            check[next[0] + dx[i]][next[1] + dy[i]] === false
          ) {
            check[next[0] + dx[i]][next[1] + dy[i]] = true;
            tmp.push([next[0] + dx[i], next[1] + dy[i]]);
            maps[next[0] + dx[i]][next[1] + dy[i]] = 2;
          }
        }

        for (let i = 0; i < tmp.length; i++) {
          queue.push(tmp[i]);
        }
      }
    }
    check.forEach((n) => n.fill(false));

    return maps;
  }

  function checkSafetyArea(map) {
    let count = 0;
    for (let i = 0; i < map.length; i++) {
      for (let j = 0; j < map[i].length; j++) {
        if (map[i][j] === 0) count += 1;
      }
    }

    return count;
  }

  let answer = -Infinity;
  // 벽 1
  for (let i = 0; i < area.length; i++) {
    for (let j = 0; j < area[i].length; j++) {
      let val = area[i][j];
      if (val === 1) {
        continue;
      } else if (val === 0) {
        area[i][j] = 1;
      }
      // 벽2
      for (let k = 0; k < area.length; k++) {
        for (let l = 0; l < area[k].length; l++) {
          let val = area[k][l];
          if (val === 1) {
            continue;
          } else if (val === 0) {
            area[k][l] = 1;
          }
          // 벽3
          for (let m = 0; m < area.length; m++) {
            for (let n = 0; n < area[m].length; n++) {
              let val = area[m][n];

              if (val === 1) {
                continue;
              } else if (val === 0) {
                area[m][n] = 1;

                const result = BFS(virus);
                const safetyZone = checkSafetyArea(result);
                answer = Math.max(answer, safetyZone);
                // console.log(result, safetyZone)
              }
              area[m][n] = val;
            }
          }
          area[k][l] = val;
        }
      }
      area[i][j] = val;
    }
  }

  return answer;
}

console.log(solution(input.slice(1)));

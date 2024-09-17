// https://www.acmicpc.net/problem/16918
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(N, area) {
  const countArr = Array.from({ length: area.length }, () => new Array(area[0].length).fill(-1));
  let sec = 0;

  // 시작 폭탄 체크
  for (let i = 0; i < area.length; i++) {
    for (let j = 0; j < area[i].length; j++) {
      if (area[i][j] === "O") {
        countArr[i][j] = 3;
      }
    }
  }

  // 0 ~ N초 까지
  while (sec <= N) {
    if (sec % 2 === 0 && sec !== 0) {
      plantBomb(area, countArr);
    }

    if (sec % 2 === 1 && sec !== 0) {
      explosion(area, countArr);
    }

    countDown(countArr);
    sec += 1;
    //   console.log(area.map(n=>n.join('')).join('\n') + '\n')
    //   console.log(countArr.map(n=>n.join(' ')).join('\n') + '\n' + sec)
  }

  return area.map((n) => n.join("")).join("\n");
}

function countDown(count) {
  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i].length; j++) {
      if (count[i][j] > 0) {
        count[i][j] -= 1;
      }
    }
  }
}

function plantBomb(area, count) {
  for (let i = 0; i < area.length; i++) {
    for (let j = 0; j < area[i].length; j++) {
      if (area[i][j] === ".") {
        area[i][j] = "O";
        count[i][j] = 3;
      }
    }
  }
}

function explosion(area, count) {
  const dx = [0, 1, 0, -1];
  const dy = [1, 0, -1, 0];

  for (let i = 0; i < count.length; i++) {
    for (let j = 0; j < count[i].length; j++) {
      if (count[i][j] === 0) {
        area[i][j] = ".";
        count[i][j] = -1;
        for (let k = 0; k < 4; k++) {
          if (area[i + dx[k]]?.[j + dy[k]] !== undefined) {
            if (count[i + dx[k]][j + dy[k]] === 0) {
              continue;
            }
            area[i + dx[k]][j + dy[k]] = ".";
            count[i + dx[k]][j + dy[k]] = -1;
          }
        }
      }
    }
  }
}

console.log(
  solution(
    +input[0].split(" ")[2],
    input.slice(1).map((n) => n.split(""))
  )
);

// https://www.acmicpc.net/problem/10709
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(area) {
  const clouds = Array.from({ length: area.length }, () => new Array(area[0].length).fill(0));

  for (let i = 0; i < area.length; i++) {
    let count = 0;
    let check = false;
    for (let j = 0; j < area[i].length; j++) {
      if (area[i][j] === "c") {
        check = true;
        count = 0;
        clouds[i][j] = count++;
      }
      if (area[i][j] === "." && check === true) {
        clouds[i][j] = count++;
      } else if (area[i][j] === "." && check !== true) {
        clouds[i][j] = -1;
      }
    }
  }

  return clouds.map((n) => n.join(" ")).join("\n");
}

console.log(solution(input.slice(1)));

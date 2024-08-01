// https://www.acmicpc.net/problem/1236
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(map) {
  const answer = [0, 0];
  // 가로 확인
  for (let i = 0; i < map.length; i++) {
    let check = false;
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "X") {
        check = true;
        break;
      }
    }
    if (check === false) {
      answer[0] += 1;
    }
  }
  // 세로 확인
  for (let i = 0; i < map[0].length; i++) {
    let check = false;
    for (let j = 0; j < map.length; j++) {
      if (map[j][i] === "X") {
        check = true;
        break;
      }
    }
    if (check === false) {
      answer[1] += 1;
    }
  }
  // 가로, 세로 중 큰 값 return
  return Math.max(...answer);
}

console.log(solution(input.slice(1)));

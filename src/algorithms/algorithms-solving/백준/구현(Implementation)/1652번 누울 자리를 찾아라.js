// https://www.acmicpc.net/problem/1652
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(areas) {
  // [가로, 세로]
  const answer = [0, 0];

  // 가로
  for (let i = 0; i < areas.length; i++) {
    if (areas[i].match(/\.\.+/g) !== null) {
      answer[0] += areas[i].match(/\.\.+/g).length;
    }
  }

  // 세로
  for (let i = 0; i < areas[0].length; i++) {
    const line = [];
    for (let j = 0; j < areas.length; j++) {
      line.push(areas[j][i]);
    }
    if (line.join("").match(/\.\.+/g) !== null) {
      answer[1] += line.join("").match(/\.\.+/g).length;
    }
  }

  return answer.join(" ");
}

console.log(solution(input.slice(1)));

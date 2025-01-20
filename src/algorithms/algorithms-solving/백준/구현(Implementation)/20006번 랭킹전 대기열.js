// https://www.acmicpc.net/problem/20006
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));
// const input = require('fs').readFileSync(0, 'utf-8').trim().split('\n');

function solution(limit, list) {
  const rooms = [];

  for (let i = 0; i < list.length; i++) {
    const [lv, name] = list[i];
    let check = false;
    for (let j = 0; j < rooms.length; j++) {
      if (rooms[j].length < limit && +lv <= +rooms[j][0][0] + 10 && +lv >= +rooms[j][0][0] - 10) {
        rooms[j].push([lv, name]);
        check = true;
        break;
      }
    }
    if (check === false) {
      rooms.push([[lv, name]]);
    }
  }

  // ※ 비교 함수를 통해 문자열의 순서를 확인하고자 할 때 사용할 수 있는 String 프로토타입 메서드 String.prototype.localeCompare(compareString)
  // https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/String/localeCompare
  rooms.forEach((n) => n.sort((a, b) => a[1].localeCompare(b[1])));

  for (let i = 0; i < rooms.length; i++) {
    if (rooms[i].length === limit) {
      rooms[i].splice(0, 0, "Started!");
    } else {
      rooms[i].splice(0, 0, "Waiting!");
    }
  }

  const test = ["bbbb", "aaa", "aab", "aa"];

  const answer = rooms.flat().map((n) => (Array.isArray(n) ? n.join(" ") : n));
  return answer.join("\n");
}

console.log(solution(+input[0][1], input.slice(1)));

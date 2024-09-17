// https://www.acmicpc.net/problem/1388
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(floor) {
  let count = 0;

  // 가로 구하기
  for (let i = 0; i < floor.length; i++) {
    count += floor[i].match(/\-+/g)?.length ?? 0;
  }

  // 세로 구하기
  for (let i = 0; i < floor[0].length; i++) {
    let tmp = "";
    for (let j = 0; j < floor.length; j++) {
      tmp += floor[j][i];
    }
    count += tmp.match(/\|+/g)?.length ?? 0;
  }

  return count;
}

console.log(solution(input.slice(1)));

// https://www.acmicpc.net/problem/2810
// 헷갈림
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(seats) {
  const LL = (seats.match(/LL/g) || []).length;
  const S = (seats.match(/S/g) || []).length;

  let cups = seats.length + 1 - LL;

  if (LL === 0) return cups - 1;
  else {
    return cups;
  }
}

console.log(solution(input[1]));

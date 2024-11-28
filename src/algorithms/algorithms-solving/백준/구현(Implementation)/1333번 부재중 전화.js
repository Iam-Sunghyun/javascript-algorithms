// https://www.acmicpc.net/problem/1333
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function solution(N, L, D) {
  const music = new Array(N * (L + 5)).fill(0);
  for (let i = 0; i < music.length; i += L + 5) {
    for (let j = i; j < i + L; j++) {
      music[j] = 1;
    }
  }

  for (let i = 0; i < music.length; i += D) {
    if (music[i] === 0) {
      return i;
    }
  }

  return D * Math.ceil(music.length / D);
  // return music
}

console.log(solution(...input));

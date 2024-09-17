// https://www.acmicpc.net/problem/1251
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(word) {
  const words = [];

  for (let i = 1; i < word.length - 1; i++) {
    for (let j = i + 1; j < word.length; j++) {
      const tmp = [];
      tmp.push(word.slice(0, i));
      tmp.push(word.slice(i, j));
      tmp.push(word.slice(j));
      words.push(tmp.map((n) => [...n].reverse().join("")).join(""));
    }
  }
  return words.sort()[0];
}

console.log(solution(input));

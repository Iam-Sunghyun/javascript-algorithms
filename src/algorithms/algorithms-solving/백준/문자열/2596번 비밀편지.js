// https://www.acmicpc.net/problem/2596
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(string) {
  const alphabets = ["A", "B", "C", "D", "E", "F", "G", "H"];
  const codes = ["000000", "001111", "010011", "011100", "100110", "101001", "110101", "111010"];

  let answer = "";
  for (let i = 0; i < string.length; i += 6) {
    const str = string.slice(i, i + 6);
    let next = "";
    let index = 0;
    for (let j = 0; j < codes.length; j++) {
      const code = codes[j];
      let dif = 0;
      for (let k = 0; k < code.length; k++) {
        if (code[k] !== str[k]) dif += 1;
      }
      if (dif <= 1) {
        next = alphabets[j];
        break;
      } else {
        index = Math.ceil(i + 6) / 6;
      }
    }
    if (next === "") {
      return index;
    } else {
      answer += next;
    }
  }

  return answer;
}

console.log(solution(input[1]));

// https://www.acmicpc.net/problem/1373
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(number) {
  const numArr = Array.from(number).reverse();
  let i = 0;

  const tmp = [];
  while (i < numArr.length) {
    tmp.push(numArr.slice(i, i + 3));
    i += 3;
  }
  let result = [];
  for (let i = 0; i < tmp.length; i++) {
    let n = 0;
    for (let j = 0; j < tmp[i].length; j++) {
      n += tmp[i][j] * 2 ** j;
    }
    result.push(n);
  }
  return result.reverse().join("");
}

console.log(solution(input));

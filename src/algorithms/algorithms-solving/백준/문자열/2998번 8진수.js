// https://www.acmicpc.net/problem/2998
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(number) {
  const num = [...number];
  while (num.length % 3 !== 0) {
    num.splice(0, 0, "0");
  }

  let sum = "";
  for (let i = 0; i < num.length; i += 3) {
    const n = num.slice(i, i + 3);
    let tmp = 0;
    for (let j = n.length - 1; j >= 0; j--) {
      tmp += +n[j] * 2 ** (2 - j);
    }
    sum += tmp;
  }

  return sum;
}

console.log(solution(input));

// 백준 9012번 스택 https://www.acmicpc.net/problem/9012
const filePath = process.platform === "linux" ? "/dev/stdin" : "../" + __dirname + "/input.txt";
let input = require("fs").readFileSync(filePath).toString().split("\n");

function solution(str) {
  const answer = [];

  for (const x of str) {
    let count = 0;

    for (const i of x) {
      count += i === "(" ? 1 : -1;
      if (count < 0) break;
    }
    answer.push(count !== 0 ? "NO" : "YES");
  }
  return answer.join("\n");
}

console.log(solution(input));

// #2
function solution(strs) {
  const answer = [];
  for (let i = 0; i < strs.length; i++) {
    const result = checkIfVps(strs[i]);
    answer.push(result.length > 0 ? "NO" : "YES");
  }

  return answer.join("\n");
}

function checkIfVps(str) {
  const reg = new RegExp(/\(\)/, "g");
  let s = str;
  while (reg.test(s) === true) {
    s = s.replace(reg, "");
  }
  return s;
}

console.log(solution(input.slice(1)));

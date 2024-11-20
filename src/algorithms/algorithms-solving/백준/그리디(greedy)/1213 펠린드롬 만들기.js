// https://www.acmicpc.net/problem/1213
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(str) {
  const string = [...str];
  string.sort();

  const alphs = {};

  for (const s of string) {
    alphs[s] = alphs[s] ? alphs[s] + 1 : 1;
  }

  // 갯수가 홀수인 알파벳 2개 이상인 경우 펠린드롬 불가
  let odds = 0;
  for (const key in alphs) {
    if (alphs[key] % 2 === 1) {
      odds += 1;
    }
    if (odds >= 2) return "I'm Sorry Hansoo";
  }

  let result = [];
  let tmp = "";
  for (const key in alphs) {
    if (alphs[key] % 2 === 1) {
      tmp = key;
    }
    result.push(key.repeat(alphs[key] / 2));
  }

  if (tmp !== "") {
    result.push(tmp);
    result = result.concat(result.slice(0, result.length - 1).reverse());
  } else {
    result = result.concat(result.slice(0, result.length).reverse());
  }

  return result.join("");
}

console.log(solution(input));

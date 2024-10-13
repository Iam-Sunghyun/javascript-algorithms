// https://www.acmicpc.net/problem/7490
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(target) {
  const operator = ["+", "-", " "];
  const results = [];

  function isZero(str) {
    const numbers = str.split(/[+-]/);
    const opers = [...str.split(/\d/).join("").trim()];
    let sum = +numbers[0];
    for (let i = 0; i < opers.length; i++) {
      if (opers[i] === "+") {
        sum += Number(numbers[i + 1]);
      }
      if (opers[i] === "-") {
        sum -= Number(numbers[i + 1]);
      }
    }

    if (sum === 0) {
      return true;
    }

    return false;
  }

  function DFS(lv, result) {
    if (lv === target) {
      let tmp = [...result];
      while (tmp.includes(" ")) {
        tmp.splice(tmp.indexOf(" "), 1);
      }
      tmp = tmp.join("");

      if (isZero(tmp)) {
        results.push(result.trim());
      }
      return;
    }
    for (let i = 0; i < 3; i++) {
      //   if(i === 2){
      //      DFS(lv + 1, result + (lv + 1), );
      //   }else{
      DFS(lv + 1, result + operator[i] + (lv + 1));
      //   }
    }
  }
  DFS(1, "1");

  return results.sort().join("\n");
}

const answer = [];
for (let i = 1; i < input.length; i++) {
  const result = solution(input[i]);
  if (result.length > 0) answer.push(result);
}

for (let i = 0; i < answer.length; i++) {
  console.log(answer[i]);
  if (i !== answer.length - 1) console.log("");
}

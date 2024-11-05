// https://www.acmicpc.net/problem/3613
const input = require("fs").readFileSync("/dev/stdin").toString().trim();

function solution(input) {
  let answer = [];

  for (let i = 0; i < input.length; i++) {
    if (!(input[i] === "_" || /[A-Za-z]/.test(input[i]))) {
      return "Error!";
    }
    if (input[i] === "_" && input[i + 1] === "_") {
      return "Error!";
    }
  }

  if (input[0] === "_" || input.at(-1) === "_") {
    return "Error!";
  }

  if (/[A-Z]/g.test(input) && input.includes("_")) {
    return "Error!";
  }

  if (/[A-Z]/.test(input[0])) {
    return "Error!";
  }

  if (/[a-z]_/g.test(input)) {
    const str = input.split("_");
    answer.push(str.shift());
    for (let i = 0; i < str.length; i++) {
      answer.push(str[i][0].toUpperCase() + str[i].slice(1));
    }
    return answer.join("");
  }

  let boundary = 0;
  for (let i = 0; i < input.length; i++) {
    if (/[A-Z]/.test(input[i])) {
      answer.push(input.slice(boundary, i) + "_");
      boundary = i;
    }
  }
  answer.push(input.slice(boundary));

  return answer.join("").toLowerCase();
}

console.log(solution(input));

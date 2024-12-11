// https://www.acmicpc.net/problem/11536
const input = require("fs").readFileSync(0, "utf-8").toString().trim().split("\n");

function solution(list) {
  const increase = [...list].sort();
  let check = true;
  for (let i = 0; i < increase.length; i++) {
    if (list[i] !== increase[i]) {
      check = false;
      break;
    }
  }
  if (check) return "INCREASING";

  const decrease = [...list].sort().reverse();
  check = true;
  for (let i = 0; i < decrease.length; i++) {
    if (list[i] !== decrease[i]) {
      check = false;
      break;
    }
  }
  if (check) return "DECREASING";

  return "NEITHER";
}

console.log(solution(input.slice(1)));

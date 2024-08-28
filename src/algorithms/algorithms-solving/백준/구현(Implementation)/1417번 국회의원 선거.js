// https://www.acmicpc.net/problem/
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(lists) {
  if (lists.length === 1) return 0;
  let answer = 0;
  let dasom = lists[0];
  let result = false;

  const list = lists.slice(1).sort((a, b) => b - a);
  while (!result) {
    for (let i = 0; i < list.length; i++) {
      if (dasom <= list[i]) {
        list[i] -= 1;
        // list[0] += 1;
        dasom += 1;
        answer += 1;
        list.sort((a, b) => b - a);
        break;
      }
    }
    result = isCompleted(list, dasom);
  }

  return answer;
}

function isCompleted(arr, dasom) {
  for (let i = 0; i < arr.length; i++) {
    if (dasom <= arr[i]) {
      return false;
    }
  }
  return true;
}

console.log(solution(input.slice(1)));

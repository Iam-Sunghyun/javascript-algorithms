// https://www.acmicpc.net/problem/19637
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(titles, list) {
  const answer = [];
  for (const character of list) {
    let [left, right] = [0, titles.length - 1];
    let mid = null;
    let title = "";
    while (left <= right) {
      mid = Math.floor((left + right) / 2);
      if (+character <= +titles[mid][1]) {
        title = titles[mid][0];
        right = mid - 1;
      } else if (+character > +titles[mid][1]) {
        left = mid + 1;
      }
    }
    // console.log(character, mid, titles[mid])
    answer.push(title);
  }
  return answer.join("\n");
}

console.log(solution(input.slice(1, +input[0][0] + 1), input.slice(+input[0][0] + 1).flat()));

// https://www.acmicpc.net/problem/25501
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");

function solution(input) {
  function isPalindrome(str, start, end, count) {
    if (start >= end) return [1, count].join(" ");
    else if (str[start] !== str[end]) return [0, count].join(" ");
    return isPalindrome(str, start + 1, end - 1, count + 1);
  }

  return isPalindrome(input, 0, input.length - 1, 1);
}

for (let i = 1; i < input.length; i++) {
  console.log(solution(input[i]));
}

// 백준 2212번 그리디 https://www.acmicpc.net/problem/2217
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const lope = input.slice(1).map(Number);

function solution(lopeList) {

  lopeList.sort((a, b) => a - b);
  let maxLope = lopeList[lopeList.length - 1];

  lopeList.forEach((lope, i) => {
    maxLope = maxLope < lope * (lopeList.length - i) ? lope * (lopeList.length - i) : maxLope;
  });

  return maxLope;
}

console.log(solution(lope));
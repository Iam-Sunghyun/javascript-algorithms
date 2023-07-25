// 백준 구현 https://www.acmicpc.net/problem/17413
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {

  let index = 0;
  let answer = '';

  while (index !== input.length) {

    if (input[index] === '<') {
      answer += input[index];
      while (input[index] !== '>') {
        index += 1;
        answer += input[index];
      }
      index += 1;
    }
    else {
      let tmp = '';
      while (input[index] !== '<' && index !== input.length) {
        tmp += input[index];
        index += 1;
      }
      let onlyStrings = tmp.split(' ').map(str => [...str].reverse().join(''));
      answer += onlyStrings.join(' ');
    }

  }

  return answer;
}

console.log(solution(input));
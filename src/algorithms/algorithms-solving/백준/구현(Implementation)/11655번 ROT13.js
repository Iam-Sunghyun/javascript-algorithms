// https://www.acmicpc.net/problem/11655
const input = require('fs').readFileSync('/dev/stdin').toString();

function solution(str) {

  const [small, capital] = [[], []];

  for (let i = 97; i <= 122; i++) {
    small.push(String.fromCodePoint(i));
    capital.push(String.fromCodePoint(i - 32));
  }

  let answer = '';
  for (let i = 0; i < str.length; i++) {
    const ithStrCode = str[i].charCodeAt();

    if (!isNaN(str[i]) || str[i] === ' ') {
      answer += str[i];
      continue;
    }
    if (ithStrCode >= 65 && ithStrCode <= 90) {
      answer = answer + capital[((ithStrCode + 13) - 65) % 26];
    }
    if (ithStrCode >= 97 && ithStrCode <= 122) {
      answer = answer + small[((ithStrCode + 13) - 97) % 26];
    }

  }

  return answer;
}

//A~Z -> 65 ~ 90
// a~z -> 97 ~ 122
console.log(solution(input));
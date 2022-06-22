// 14425번 문자열 집합 https://www.acmicpc.net/problem/14425
// 입력 받기 ↓
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split('\n');

function hasString(input) {

  const n = input[0].split(' ')[0];
  // 문자열 카드 나누기
  const a = new Set(input.slice(1, +n));
  const b = input.slice(n + 1);
  let answer = 0;

  // 교집합 검사
  for (const string of b) {
    if (a.has(string)) answer += 1;
  }
  return answer;
}


console.log(hasString(input));
// 백준 5622번 문자열 https://www.acmicpc.net/problem/5622
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('');

function solution(str) {
  const alphabet = {};
  let answer = 0;

  // 유니코드 사용, 알파벳과 다이얼 번호를 값으로 갖는 객체 생성
  for (let [i, j] = [0, 0]; i < 26; i++) {
    alphabet[String.fromCharCode(65 + i)] = j + 2;
    if ((i + 1) % 3 === 0) j++;
  }
  // 세부내용 수정
  alphabet['S'] = 7;
  alphabet['V'] = 8;
  alphabet['Y'] = 9;
  alphabet['Z'] = 9;

  str.forEach(s => answer = answer + alphabet[s] + 1);
  return answer;
}

console.log(solution(input));
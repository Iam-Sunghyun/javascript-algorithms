// 백준 수학 골드5 https://www.acmicpc.net/problem/1759
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(L, alphabets) {

  // 결과 저장용 배열들
  const result = [];
  const tmp = new Array(L).fill('');

  alphabets.sort(); // 순서대로 정렬

  // 조합 함수
  function combination(lv, index) {
    if (lv === L - 1) {
      result.push([...tmp].join(''));
      return;
    }
    for (let i = index + 1; i < alphabets.length; i++) {
      tmp[lv + 1] = alphabets[i];
      combination(lv + 1, i);
    }
  }

  // 조합 경우의 수 구하기
  for (let i = 0; i <= alphabets.length - L; i++) {
    tmp[0] = alphabets[i];
    combination(0, i);
  }

  // 모음, 자음 체크하여 조건에 부합하는 요소만 answer에 push
  const vowel = ['a', 'e', 'i', 'o', 'u'];
  const answer = [];
  for (let i = 0; i < result.length; i++) {
    let vowels = 0;
    for (let j = 0; j < vowel.length; j++) {
      if (result[i].includes(vowel[j])) {
        vowels += 1;
      }
    }
    if (vowels > 0 && L - vowels >= 2) {
      answer.push(result[i]);
    }
  }

  return answer.join('\n');
}

console.log(solution(+input[0][0], input[1].split(' ')));
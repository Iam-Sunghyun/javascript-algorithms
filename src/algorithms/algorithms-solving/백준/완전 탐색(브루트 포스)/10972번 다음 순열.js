// 백준 완전 탐색(조합) 실버3 https://www.acmicpc.net/problem/10972
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

function solution(numbers) {

  if (numbers.length === 1) return -1;

  const target = Number(numbers.join(''));
  const result = [];  // 모든 경우 저장용 임시배열
  const tmp = new Array(numbers.length).fill(''); // 특정 경우 저장용 임시배열

  // 오름차순 결과를 위하여 순열 적용 전 정렬
  numbers.sort((a, b) => a - b);

  // 순열 함수
  function permutation(lv) {
    if (lv === numbers.length) {
      if (tmp.join('')[0] !== '0') {
        result.push(Number(tmp.join('')));
      }
      return;
    }
    // DFS 
    for (let i = 0; i < numbers.length; i++) {
      if (check[i] === false) {
        check[i] = true;
        tmp[lv + 1] = numbers[i];
        permutation(lv + 1);
        check[i] = false;
      }
    }
  }

  // 순열 함수 호출
  const check = new Array(numbers.length).fill(false);
  for (let i = 0; i < numbers.length; i++) {
    check[i] = true;
    tmp[0] = numbers[i];
    permutation(1);
    check[i] = false;
  }

  // 입력된 순열 다음 요소 확인
  const answerIndex = result.indexOf(target);

  return answerIndex === result.length - 1 ? -1 : [...result[answerIndex + 1].toString()].join(' ');
}

console.log(solution(input[1].split(' ').map(Number)));
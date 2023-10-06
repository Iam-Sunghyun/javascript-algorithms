// 백준 완전 탐색(브루트 포스, 조합) 실버1 https://www.acmicpc.net/problem/16943
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ');

function solution(A, B) {

  const result = [];  // 모든 경우 저장용 임시배열
  const tmp = new Array(A.length).fill(''); // 특정 경우 저장용 임시배열

  // 순열 함수
  function permutation(lv) {
    if (lv === A.length) {
      if (tmp.join('')[0] !== '0') {
        result.push(Number(tmp.join('')));
      }
      return;
    }
    // DFS 
    for (let i = 0; i < A.length; i++) {
      if (check[i] === false) {
        check[i] = true;
        tmp[lv + 1] = A[i];
        permutation(lv + 1);
        check[i] = false;
      }
    }
  }

  // 사용된 요소 확인용 체크 배열
  const check = new Array(A.length).fill(false);
  for (let i = 0; i < A.length; i++) {
    check[i] = true;
    tmp[0] = A[i];
    permutation(1);
    check[i] = false;
  }

  // B보다 작은 수중 가장 큰 값 확인
  let answer = -1;
  for (let i = 0; i < result.length; i++) {
    if (result[i] < B) {
      answer = Math.max(result[i], answer);
    }
  }
  return answer;
}

console.log(solution(input[0], +input[1]));
// 백준 실버 5 https://www.acmicpc.net/problem/2740
// 행렬 곱셈 시 행/열 인덱스 헷갈리는 문제 
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));
const matrix1 = input.slice(1, input[0][0] + 1);
const matrix2 = input.slice(input[0][0] + 2);

function solution(matrix1, matrix2) {
  const result = Array.from({ length: matrix1.length }, () => new Array(matrix2[0].length).fill(0));

  // 행렬 곱셈 성립하려면 -> 앞 행렬의 열 === 뒷 행렬의 행
  // 결과 행렬은 앞 행렬의 행 x 뒷 행렬의 열
  for (let i = 0; i < matrix2[0].length; i++) {
    for (let j = 0; j < matrix1.length; j++) {
      let tmp = 0;
      for (let k = 0; k < matrix1[0].length; k++) {
        tmp += matrix1[j][k] * matrix2[k][i];
      }
      result[j][i] = tmp;
    }
  }

  // 정답 출력
  const answer = [];
  for (let i = 0; i < result.length; i++) {
    answer.push(result[i].join(' '));
  }
  return answer.join('\n');
}

console.log(solution(matrix1, matrix2));
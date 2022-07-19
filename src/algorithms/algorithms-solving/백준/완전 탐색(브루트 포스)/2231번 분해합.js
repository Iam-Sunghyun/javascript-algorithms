// 백준 2231번 완전 탐색 https://www.acmicpc.net/problem/2231
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

function solution(n) {

  for (let i = 1; i <= n; i++) {
    let number = String(i); // 반복을 통해 각 자릿수를 더하기 위해 문자열로 변환 후 number 저장 
    let tmp = i;            // 숫자i와 숫자의 각 자리를 더해줄 정수
    for (let j = 0; j < number.length; j++) {
      tmp = tmp + +number[j];
    }
    // 숫자 + 자릿수 합이 n과 일치하면 최초의 생성자이므로 return
    if (tmp === +n) return number;
  }

  return 0;
}

console.log(solution(input));
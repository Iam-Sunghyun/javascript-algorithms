// 백준 1541번 그리디 https://www.acmicpc.net/problem/1541
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/[-]/);
// 입력 다항식을 -로 구분하여 배열에 저장함. 입력과 동시에 괄호화 한 것. 요소끼리 뺼셈만 해주면 자동적으로 최소값이 된다.
// ex) 55-50+40-20+34+22 => ['55', '50+40', '20+34+22']

function solution(exp) {
  let answer = 0;

  for (let i = 0; i < exp.length; i++) {
    let num = exp[i].split(/[+]/).map(Number);
    let sum = 0;

    // 숫자 항들을 더해 준다
    num.forEach(n => sum += +n);

    // 맨 처음 요소는 양수 이므로 항상 더해 준다.
    if (i === 0) {
      answer += sum;
      continue;
    }
    // 맨 처음이 아닌 요소들의 합은 빼준다.
    answer -= sum;
  }

  return answer;
}

console.log(solution(input));
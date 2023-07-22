// 백준 구현 실버1 https://www.acmicpc.net/problem/2504
const input = require('fs').readFileSync('/dev/stdin').toString().trim();

function solution(input) {
  if (input.length === 1) return 0;

  // 연산 복잡도를 줄이기 위해 (), [] 형태의 괄호열 쌍 2, 3으로 변환 
  const replaceTwo = input.replaceAll(/\(\)/g, '2');
  const replacedAll = replaceTwo.replaceAll(/\[\]/g, '3');

  const stack = [];
  // 괄호열 순회
  for (const str of replacedAll) {

    // 괄호열이 닫는 기호가 나왔을 경우
    if (str === ')' || str === ']') {
      let tmp = 0;

      // 닫는 기호와 맞는 여는 기호가 나올때 까지 순회
      while (true) {
        const next = stack.pop();

        // pop한 값이 숫자라면 임시 변수 tmp에 더해준다
        if (Number.isInteger(+next)) {
          if (tmp === 0) {
            tmp = +next;
          } else {
            tmp += +next;
          }
          // 닫는 기호와 맞는 여는 기호가 나왔다면 대응되는 값을 tmp에 곱한 뒤 stack에 push하고 break
        } else if (str === ')' && next === '(') {
          tmp *= 2;
          stack.push(tmp);
          break;
        } else if (str === ']' && next === '[') {
          tmp *= 3;
          stack.push(tmp);
          break;
          // 닫는 기호와 여는 기호가 안맞는다면 잘못된 괄호열
        } else {
          return 0;
        }
      }
      // 닫는 기호 아니면 stack에 push
    } else {
      stack.push(str);
    }
  }

  // 정답이 숫자면 return, 문자열이 남아있다면 0
  const answer = stack.reduce((acc, num) => +acc + +num, 0);
  return Number.isInteger(answer) ? answer : 0;

}

console.log(solution(input));
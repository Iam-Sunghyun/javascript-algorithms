// 백준 완전탐색 실버1 https://www.acmicpc.net/problem/14888
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(numbers, opCount) {

  const tmp = ['+', '-', 'x', '/'];
  const operators = [];

  // 연산자 배열에 넣기
  for (let i = 0; i < opCount.length; i++) {
    const operator = tmp[i];
    for (let j = 0; j < opCount[i]; j++) {
      operators.push(operator);
    }
  }

  // 순열을 위한 체크배열
  const check = new Array(operators.length).fill(false);
  let [max, min] = [-Infinity, +Infinity];

  function permutation(level, result) {
    if (level === numbers.length) {
      max = Math.max(result, max);
      min = Math.min(result, min);
      return;
    }
    for (let i = 0; i < operators.length; i++) {
      if (check[i] === false) {
        let newResult = 0;
        switch (operators[i]) {
          case '+':
            newResult = result + numbers[level];
            break;
          case '-':
            newResult = result - numbers[level];
            break;
          case 'x':
            newResult = result * numbers[level];
            break;
          case '/':
            if (result < 0) {
              newResult = -(Math.floor(-result / numbers[level]));
            } else {
              newResult = Math.floor(result / numbers[level]);
            }
            break;
        }
        check[i] = true;
        permutation(level + 1, newResult);
        check[i] = false;
      }
    }
  }

  permutation(1, numbers[0]);
  return [max, min];
}


console.log(solution(input[1].slice(), input[2]));
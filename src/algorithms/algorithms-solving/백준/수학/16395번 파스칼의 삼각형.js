// 백준 조합 실버5 https://www.acmicpc.net/problem/16395
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(' ').map(Number);

// 방법1 조합 공식 이용
function solution1(n, k) {

  function factorial(num) {
    let result = 1;
    for (let i = 1; i <= num; i++) {
      result *= i;
    }
    return result;
  }

  return factorial(n - 1) / (factorial((n - 1) - (k - 1)) * factorial(k - 1));
}

console.log(solution1(input[0], input[1]));

// 방법2 파스칼 삼각형 조합 성질 이용

function solution2(n, k) {
    
    function combination(N, R){
      if(N === R || R === 0 || N === 1){
          return 1;
      }
      return combination(N - 1, R - 1) + combination(N - 1, R);
    }
    
    return combination(n-1, k-1);
}

console.log(solution2(input[0], input[1]));
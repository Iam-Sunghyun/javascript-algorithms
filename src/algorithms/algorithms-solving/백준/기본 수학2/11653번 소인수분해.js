// 백준 11653번 기본 수학2 https://www.acmicpc.net/problem/11653
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

function primeFactorization(num){
  const answer = [];
  let n = 2;
  if(num === 1) return false;
    
  // 2부터 대상 값을 나누어 분해 
  while(true){
    if(num % n === 0){
        answer.push(n);
        num /= n;
        continue;
    }else{
        n++;
    }
    
    // 대상 값이 1 이하가 되면 return
    if(num <= 1){
        return answer;
    }
  }
}
if(primeFactorization(+input[0])) console.log(primeFactorization(+input[0]).join('\n'));
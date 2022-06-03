// 백준 1978번 기본 수학2 https://www.acmicpc.net/step/10
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
let answer = 0;

for(let i = 1; i < input.length; i++ ){
    const number = +input[i];
    // 소수 판별
    if(isPrimeNum(number))answer++;

}

function isPrimeNum(num) {
    
  if(num <= 1) return false;

  if(num <= 3) return true;

  if(num % 2 === 0) return false;
  
  for(let i = 3; i <= Math.floor(num**0.5); i += 2){
    if(num % i === 0) return false;
  }  
  return true; 
}

console.log(answer);
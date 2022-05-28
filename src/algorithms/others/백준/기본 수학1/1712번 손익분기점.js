// 백준 1712번 기본 수학1 https://www.acmicpc.net/step/8
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const fixedExpenses = +input[0];
const costByNotebook = +input[1];
const priceOfNotebook = +input[2];
let breakEvenPoint = 0;

if(costByNotebook >= priceOfNotebook){
    console.log(-1);
}else{
  // Math.floor()을 해주지 않으면 일부 경우 실수값이 출력 됨.
  // ex) 입력 값이 5 3 5 인 경우 
  breakEvenPoint = Math.floor(fixedExpenses / (priceOfNotebook - costByNotebook)) + 1;
  console.log(breakEvenPoint);
}


// 백준 10815번 (https://www.acmicpc.net/problem/10815)
// 입력 받는 코드 ↓
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const [N, M] = [+input[0], +input[2]];
const [hasCards, givenCards] = [new Set(input[1].split(' ').map(Number)), input[3].split(' ').map(Number)];

let answer = ''
  
for(let i = 0; i < M; i++){
  if(hasCards.has(givenCards[i])){
    answer += '1 ';
  }else{
    answer += '0 ';
  }
}

console.log(answer);

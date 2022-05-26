// 백준 10815번 집합과 맵 (https://www.acmicpc.net/problem/10815)
// 입력 받는 코드 ↓ (백준에서 사용 가능한 간략 버전(fs))
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');

const fs = require('fs');
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

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

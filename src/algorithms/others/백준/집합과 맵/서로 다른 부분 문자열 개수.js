// 백준 11478번 집합과 맵 https://www.acmicpc.net/problem/11478
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';

// 배열이 아닌 문자열 형태로 입력 저장
const input = require('fs').readFileSync(filePath).toString().trim();

const answer = new Set([...input]);

// 배열이 아닌 문자열 자체로 받아서 String.prototype.slice() 하나만으로
// 될 것을 배열로 입력 문자열을 하나씩 나눠서 저장한 다음 slice() 후 추가로 join()으로 연산했더니
// 시간 초과가 계속 떴었음.
for(let i = 1; i < input.length; i++){
   for(let j = 0; j < input.length - i; j++){
       answer.add(input.slice(j, j + i + 1));
   }
}

console.log(answer)
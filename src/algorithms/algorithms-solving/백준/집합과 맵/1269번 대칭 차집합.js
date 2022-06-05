// 백준 1269번 집합과 맵 https://www.acmicpc.net/problem/1269
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const n = +input[0];
const m = +input[1];

const A = input.slice(2, n + 2); 
const B = new Set([...input.slice(n + 2)]);
const answer = [];

// A의 요소 중 중복되지 않는 값 answer에 삽입, 중복 값은 B에서 삭제
A.forEach(v => { if(!B.has(v)){ answer.push(v);} else{ B.delete(v) }});

// answer에 중복을 제거한 값을만 남은 B를 concat 해준 후 length로 개수 출력
console.log(answer.concat([...B]).length)
// 백준 1764번 집합과 맵 https://www.acmicpc.net/problem/1764
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const n = +input[0];
const m = +input[1];
const answer = [];

const neverHeardList = input.slice(2, n + 2); 
const neverSeenList = new Set([...input.slice(n + 2)]);

neverHeardList.forEach(v => {if(neverSeenList.has(v)) answer.push(v)});
answer.sort();

console.log(answer.length + '\n' + answer.join('\n'))
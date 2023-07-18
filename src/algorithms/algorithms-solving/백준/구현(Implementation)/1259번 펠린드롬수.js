// 백준 구현 https://www.acmicpc.net/problem/1259
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const answer = [];

for(let i = 0; i < input.length - 1; i++){
    input[i] === [...input[i]].reverse().join('') ? answer.push('yes') : answer.push('no');
}

console.log(answer.join('\n'));

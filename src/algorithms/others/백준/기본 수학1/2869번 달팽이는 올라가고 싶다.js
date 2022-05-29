// 백준 2869번 기본 수학1 https://www.acmicpc.net/step/2869
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);

const move = +input[0];
const back = +input[1];
let goal = +input[2];

const answer = Math.ceil((goal - back) /(move - back));
console.log(answer);
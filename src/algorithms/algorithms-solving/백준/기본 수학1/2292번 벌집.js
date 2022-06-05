// 백준 2292번 기본 수학1 https://www.acmicpc.net/problem/2292
const filePath = process.platform === 'linux' ? '/dev/stdin' : './input.txt';
const input = require('fs').readFileSync(filePath).toString().trim().split(/\s/);
// 문제를 그려서 표현 해보자. 규칙과 필요한 변수가 보인다
let target = +input[0];
let distance = 1;
let gap = 6;
let boundary = 1;

while(boundary < target){
    boundary += gap;
    gap += 6;
    distance += 1;
}
console.log(distance)
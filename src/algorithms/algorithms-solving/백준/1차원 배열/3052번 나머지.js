// 백준 3052번 1차원 배열 https://www.acmicpc.net/problem/3052
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
 
function solution(list){
    const answer = new Set();
    list.forEach(num => answer.add(num % 42));
    return answer.size;
}

console.log(solution(input.map(Number)));
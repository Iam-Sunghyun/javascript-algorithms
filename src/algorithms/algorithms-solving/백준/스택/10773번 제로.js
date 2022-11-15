// 백준 10773번 스택 https://www.acmicpc.net/problem/10773
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(Number);

function solution(a){
    const answer = []
    for(let i = 0; i < a.length; i++){
        a[i] === 0 ? answer.pop() : answer.push(a[i]);
    }
    return answer.reduce((acc, num) => acc + num, 0);
}

console.log(solution(input));
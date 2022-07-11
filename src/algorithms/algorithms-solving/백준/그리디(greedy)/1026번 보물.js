// 백준 1026번 그리디 https://www.acmicpc.net/problem/1026
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);

function solution(A, b) {
    let answer = 0;
    const B = b.sort((a, b) => b - a);
    A.sort((a, b) => a - b);

    B.forEach((num, i) => {
        answer += (num * A[i]);
    });

    return answer;
}

console.log(solution(A, B));
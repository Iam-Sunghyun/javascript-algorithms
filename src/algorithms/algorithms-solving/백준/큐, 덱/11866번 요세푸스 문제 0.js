// 백준 11866번 큐 https://www.acmicpc.net/problem/11866
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ").map(Number);

function solution(n, k) {
    const numbers = new Array(n).fill().map((n, i) => i + 1);
    const answer = [];
    let nth = k - 1;
    
    while(answer.length < n){
        
        answer.push(numbers[nth]);
        numbers.splice(nth,1);
        
        nth = ((nth - 1 + k) % numbers.length);
    }

    return `<${answer.join(', ')}>`;
}

console.log(solution(input[0], input[1]));
// 백준 15828번 큐 https://www.acmicpc.net/problem/15828
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n");
const size = +input[0];

function solution(a, size) {
    const queue = [];
    for(let i = 0; i < a.length; i++){
        if(a[i] === '0') queue.shift();
        else if(a[i] === '-1') break;
        else if(queue.length < size){
            queue.push(a[i]);
        }
    }
    
    return queue.length !== 0 ? queue.join(' ') : 'empty';
}

console.log(solution(input.slice(1), size));
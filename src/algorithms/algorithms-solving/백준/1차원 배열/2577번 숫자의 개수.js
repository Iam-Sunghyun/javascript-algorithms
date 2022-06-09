// 백준 2577번 1차원 배열 https://www.acmicpc.net/problem/2577
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
 
function solution(list){
    const answer = new Array(10).fill(0);
    const multiple = [...list.reduce((acc, num) => acc * num, 1).toString()];
    
    multiple.forEach(num => answer[num]++);
    
    return answer.join('\n');
}

console.log(solution(input.map(Number)));
// 백준 10818번 1차원 배열 https://www.acmicpc.net/problem/10818
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
 
function solution(list){
    let min = list[0];
    let max = list[0];
    list.forEach(num => {
        min = num < min ? num : min;
        max = num > max ? num : max;
    });
    return `${min} ${max}`;
}

console.log(solution(input.slice(1).map(Number)));
// 백준 1546번 1차원 배열 https://www.acmicpc.net/problem/1546
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
 
function solution(list){
    let result = 0;
    let max = 0;
    list.forEach(num => max = num > max ? num : max);
    list.forEach(num => result += ((num / max) * 100));
    return result / list.length;
}

console.log(solution(input.slice(1).map(Number)));
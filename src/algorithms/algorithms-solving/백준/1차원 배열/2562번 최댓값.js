// 백준 2562번 1차원 배열 https://www.acmicpc.net/problem/2562
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
 
function solution(list){
    let max = list[0];
    let index = 0;
    
    list.forEach((num, i) => {
        if(num > max){
            max = num;
            index = i;
        }
    });
    return `${max}\n${index+1}`;
}

console.log(solution(input.slice(0).map(Number)));
// 백준 8958번 1차원 배열 https://www.acmicpc.net/problem/8958
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
 
function solution(list){
   const answer = new Array(list.length).fill(0);
   for(let i = 0; i < list.length; i++){
       let score = 0;
       for(let j = 0; j < list[i].length; j++){
           if(list[i][j] === 'O') score++;
           else score = 0;
           answer[i] += score;
       }
       
   }
   return answer.join('\n');
}
console.log(solution(input.slice(1)));
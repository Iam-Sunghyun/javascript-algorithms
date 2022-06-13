// 백준 4344번 1차원 배열 https://www.acmicpc.net/problem/4344
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/).slice(1);
let score = [];

for(const item of input){
    score.push(item.split(' ').map(Number));
}
 
function solution(list){
   const average = [];
   const answer = [];
   
   // 각 케이스의 평균 점수 구하기
   for(let i = 0; i < list.length; i++){
       let sum = 0;
       for(let j = 1; j < list[i].length; j++){
           sum += list[i][j];
       }
       average.push(sum / list[i][0]);
   }
   
   // 각 케이스에서 평균보다 높은 점수 구하기
   for(let i = 0; i < list.length; i++){
       let higher = 0;
       for(let j = 1; j < list[i].length; j++){
           if(list[i][j] > average[i]) higher++;
       }
       // 평균보다 높은 점수 비율 구하기
       answer.push(((higher / list[i][0]) * 100).toFixed(3));
   }
   
   // 출력
   for(let i = 0; i < answer.length; i++){
       console.log(`${answer[i]}%`);
   }
}

solution(score);
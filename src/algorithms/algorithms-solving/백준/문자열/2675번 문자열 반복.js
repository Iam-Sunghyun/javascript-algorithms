// 백준 2675번 문자열 https://www.acmicpc.net/problem/2675
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);

function solution(str){
    const answerArr = [];
    
    for(let i = 2; i < str.length; i+=2){
        let answer = '';
        for(let j = 0; j < str[i].length; j++){
            answer = answer + str[i][j].repeat(+str[i - 1]);
        }
        answerArr.push(answer);
    }
    return answerArr.join('\n');  
}

console.log(solution(input));
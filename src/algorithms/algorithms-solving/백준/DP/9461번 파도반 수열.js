/**
 * 백준 9461번 DP https://www.acmicpc.net/submit/9461
 */
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const nums = input.slice(1).map(Number);
function solution(num) {
    const sequence = [1,1,1]
    const answer = [];
    const max = Math.max(...num);
    
    for(let i = 3; i < max; i++){
        sequence[i] = sequence[i-2] + sequence[i-3];
    }
    
    for(let i = 0; i < num.length; i++){
        answer.push(sequence[num[i] - 1]);
    }
    return answer.join('\n')
}

console.log(solution(nums));
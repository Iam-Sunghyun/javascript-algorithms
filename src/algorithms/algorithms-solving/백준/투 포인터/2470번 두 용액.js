// 백준 2470번 https://www.acmicpc.net/problem/2470
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
 
function solution(list){
    let answer = [];
    let left = 0;
    let right = list.length - 1;
    let minValue = Infinity;
    
    // 오름차순 정렬
    list.sort((a, b) => a - b);
    
    // 투 포인터로 값 쌍 찾기
    while(left < right){
        const sum = list[left] + list[right];
        if(Math.abs(minValue) > Math.abs(sum)){
            minValue =  sum;
            answer = [list[left], list[right]];
        }
        // 두 요소 합이 음수이면 음수쪽(left) 포인터 늘리기
        if(sum < 0){
            left++;
        // 양수이면 양수쪽(right) 포인터 줄이기
        }else{
            right--;
        }
    }
    return answer.join(' ');

}

console.log(solution(input.slice(1).map(Number)));
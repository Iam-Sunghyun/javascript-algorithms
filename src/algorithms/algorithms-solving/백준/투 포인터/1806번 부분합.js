// 백준 1806번 투 포인터 https://www.acmicpc.net/problem/1806
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const target = +input[1];
const numbers = input.slice(2).map(Number);

function solution(arr, target){
  // 두 포인터 모두 0번부터 시작
    let left = 0;
    let right = 0;
    let sum = arr[left];
    const answer = [];
    
    // 둘 중 하나라도 유효한 범위를 넘어서면 종료
    while(arr[right] && arr[left]){
        if(sum < target){
            right++;
            sum += arr[right];
        }else if(sum >= target){
          // 조건에 만족하는 구간의 범위 크기를 answer배열에 저장 
            answer.push(right - left + 1);
            sum -= arr[left];
            left++;
        }else{
            right++;
            sum += arr[right];
        }
    }
  // answer 오름차순 정렬 후 맨 앞 요소 return
  answer.sort((a, b) => a - b);
  return answer.length ? answer[0] : 0;
}

console.log(solution(numbers, target));
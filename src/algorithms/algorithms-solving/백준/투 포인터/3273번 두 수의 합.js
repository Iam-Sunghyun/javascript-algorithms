// 백준 3273번 투 포인터 https://www.acmicpc.net/problem/3273
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
const target = +input.slice(-1);
const numbers = input.slice(1, input.length - 1).map(Number);

function solution(arr, target){
  let left = 0;
  let right = arr.length - 1;
  let answer = 0;

  // 배열 오름차순 정렬
  arr.sort((a, b) => a - b);

  // 투 포인터를 이동시키면서 일치하는 쌍 찾기
  while(left < right){
      if(arr[left] + arr[right] === target){
          answer++;
          left++;
      }else if(arr[left] + arr[right] > target){
          right--;
      }else{ 
          left++; 
      }
  }
  return answer;
}

console.log(solution(numbers, target));

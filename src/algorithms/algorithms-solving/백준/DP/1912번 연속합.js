// 백준 1912번 연속합 https://www.acmicpc.net/problem/1912
// 동적프로그래밍 문제(헷갈림) 
// 풀이 참고 https://guiyum.tistory.com/16
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const nums = input.slice(1).map(Number);

function solution(num) {
  const answer = new Array(num.length).fill(0);
  answer[0] = num[0];
  let max = num[0];

  for (let i = 1; i < num.length; i++) {
    answer[i] = num[i] + answer[i - 1];
  }

  for (let i = 1; i < num.length; i++) {
    answer[i] = Math.max(num[i] + answer[i - 1], num[i]);
    if (max < answer[i]) max = answer[i];
  }
  return max;
}

console.log(solution(nums));

// O(n2)으로 시간초과난 풀이
// 구간 합을 구한 뒤 모든 경우를 체크하여 최대 값 도출
// const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\s/);
// const nums = input.slice(1).map(Number);
// function solution(num) {
//     const answer = new Array(num.length).fill(0);
//     let max = -Infinity;
//     answer[0] = num[0];
//
//     // 구간 합 계산
//     for(let i = 1; i < num.length; i++){
//         answer[i] = num[i] + answer[i - 1];
//     }
//     // 모든 케이스 체크
//     for(let i = answer.length - 1; i > 0; i--) {
//         for(let j = i - 1; j >= 0; j--){
//             if(max < answer[i] - answer[j])
//                 max = answer[i] - answer[j]
//         }
//     }

//   return max;
// }

// console.log(solution(nums));

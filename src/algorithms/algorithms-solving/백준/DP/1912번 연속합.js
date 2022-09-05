// 백준 1912번 연속합 https://www.acmicpc.net/problem/1912
// 동적프로그래밍 문제 
// 풀이 참고 https://guiyum.tistory.com/16
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
const nums = input.slice(1).map(Number);

function solution(num) {
  // 구간 합 저장용 배열
  const answer = new Array(num.length).fill(0);
  answer[0] = num[0];
  let max = num[0];

  // 수열 구간 합 저장하기
  for (let i = 1; i < num.length; i++) {
    answer[i] = num[i] + answer[i - 1];
  }

  // i-1번 구간 합(answer[i - 1]) + i번째 수열 값(num[i])보다
  // i번째 수열 값(num[i])이 큰 경우 i번째 수열 값을 i번째 구간 합(answer[i])으로 갱신 
  // (이전 구간 중에 합이 최대였던 구간보다 큰 값이므로 새로운 구간의 시작.)
  for (let i = 1; i < num.length; i++) {
    answer[i] = Math.max(num[i] + answer[i - 1], num[i]);
    if (max < answer[i]) max = answer[i];
  }
  return max;
}

console.log(solution(nums));

// O(n2)으로 시간초과난 풀이
// 구간 합을 구한 뒤 2중for문으로 모든 경우를 체크하여 최대 값 도출
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

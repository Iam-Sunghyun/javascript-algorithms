// 백준 구현 실버3 https://www.acmicpc.net/problem/2108
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(input) {

  // 중앙값, 범위 구하기
  const sortedList = input.sort((a, b) => a - b);     // 정렬
  const mid = sortedList[Math.floor(sortedList.length / 2)]; // 중앙값
  const range = sortedList.at(-1) - sortedList[0];     // 범위

  // 빈도, 평균 구하기
  const frequency = {}; // 빈도 체크용
  let sum = 0;  // 합계 저장용
  for (const num of sortedList) {
    sum += num;
    frequency[num] = frequency[num] + 1 || 1;
  }
  const average = Math.round(sum / sortedList.length);

  // 최빈값 구하기
  const sortedFrequencyArr = Object.entries(frequency).sort((a, b) => b[1] - a[1]); // 빈도 수로 내림차순 정렬
  const max = sortedFrequencyArr[0][1];
  // 최대 빈도인 값들 체크
  const list = [];
  for (const num of sortedFrequencyArr) {
    if (num[1] === max) {
      list.push(num);
    }
  }
  // 최대 빈도인 값들 오름차순 정렬
  list.sort((a, b) => +a[0] - +b[0]);

  return [average, mid, list.length > 1 ? +list[1][0] : +list[0][0], range].join('\n');
}

console.log(solution(input.slice(1)));


// 객체 대신 map을 이용한 풀이
function solution(input) {

  // 중앙값, 범위 구하기
  input.sort((a, b) => a - b);     // 정렬
  const mid = input[Math.floor(input.length / 2)]; // 중앙값
  const range = input.at(-1) - input[0];     // 범위

  // 빈도, 합, 최고 빈도 구하기
  const frequency = new Map(); // 빈도 체크용
  let max = -Infinity; // 최고 빈도 저장용
  let sum = 0;  // 합계 저장용
  for (const num of input) {
    sum += num;
    if (frequency.has(num)) {
      frequency.set(num, frequency.get(num) + 1);
      max = Math.max(max, frequency.get(num));
    } else {
      frequency.set(num, 1);
      max = Math.max(max, 1);
    }
  }
  const average = Math.round(sum / input.length);

  // 최빈값 구하기
  // 최대 빈도인 값들 체크
  const list = [];
  for (const num of frequency) {
    if (num[1] === max) {
      list.push(num);
    }
  }
  // 최대 빈도인 값들 오름차순 정렬

  return [average, mid, list.length > 1 ? +list[1][0] : +list[0][0], range].join('\n');
}

console.log(solution(input.slice(1)));
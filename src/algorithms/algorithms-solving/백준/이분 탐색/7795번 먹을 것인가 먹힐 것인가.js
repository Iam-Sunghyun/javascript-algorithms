// 백준 이분탐색 실버3 https://www.acmicpc.net/problem/7795
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(N, M) {

  M.sort((a, b) => a - b);

  const answer = [];
  for (const number of N) {
    answer.push(binarySearch(M, number));
  }

  return answer.reduce((acc, n) => acc + (n + 1), 0);
}

function binarySearch(array, target) {
  let [start, end] = [0, array.length - 1];
  let mid = 0;

  while (start <= end) {
    mid = Math.floor((start + end) / 2);
    const number = array[mid];
    if (number === target) {
      return mid - 1;
    } else if (mid === 0 && number > target) {
      return -1;
    }

    if (number > target) {
      end = mid - 1;
    }
    if (number < target) {
      start = mid + 1;
    }
  }

  return mid;
}

const answer = [];
let index = 2;
for (let i = 0; i < input[0][0]; i++) {
  answer.push(solution(input[index], input[index + 1]));
  index += 3;
}

console.log(answer.join('\n'));
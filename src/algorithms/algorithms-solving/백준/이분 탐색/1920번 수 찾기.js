// 백준 이분탐색 실버4 https://www.acmicpc.net/problem/1920
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' '));

function solution(N, M) {

  const check = new Array(100000 + 1).fill(false);

  for (let i = 0; i < N.length; i++) {
    check[N[i]] = true;
  }

  const answer = [];
  for (let i = 0; i < M.length; i++) {
    check[M[i]] === true ? answer.push(1) : answer.push(0);
  }

  return answer.join('\n');
}

console.log(solution(input[1], input[3]));

// 반복 이분탐색
function solution(N, M) {

  N.sort((a, b) => a - b);

  const answer = [];
  for (const number of M) {
    answer.push(binarySearch(+number, N));
  }
  return answer.join('\n');
}

function binarySearch(target, arrN) {

  let [start, end] = [0, arrN.length - 1];

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    if (arrN[mid] === target) {
      return 1;
    }

    if (arrN[mid] > target) {
      end = mid - 1;
    } else if (arrN[mid] < target) {
      start = mid + 1;
    }
  }
  return 0;
}

console.log(solution(input[1], input[3]));

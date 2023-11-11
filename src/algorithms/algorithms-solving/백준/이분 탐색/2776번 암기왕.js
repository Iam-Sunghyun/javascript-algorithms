// 백준 이분탐색 실버4 https://www.acmicpc.net/problem/2776
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function solution(note1, note2) {

  note1.sort((a, b) => a - b);

  const answer = [];
  for (const number of note2) {
    answer.push(binarySearch(note1, number));
  }

  return answer;
}

function binarySearch(array, target) {

  let [start, end] = [0, array.length - 1];

  while (start <= end) {
    let mid = Math.floor((start + end) / 2);
    const midNum = array[mid];
    if (midNum === target) {
      return 1;
    }
    if (midNum < target) {
      start = mid + 1;
    } else if (midNum > target) {
      end = mid - 1;
    }
  }
  return 0;
}

const answer = [];
let index = 2;
for (let i = 1; i <= input[0][0]; i++) {
  answer.push(solution(input[index], input[index + 2]));
  index += 4;
}

console.log(answer.flat().join('\n'));

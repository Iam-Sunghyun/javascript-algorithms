// 백준 구현 https://www.acmicpc.net/problem/2167
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(nums => nums.split(' ').map(Number));
const arr = input.slice(1, input[0][0] + 1);
const sumRange = input.slice(input[0][0] + 2);

function solution(array, range) {

  let answer = [];

  for (let num = 0; num < range.length; num++) {
    const [i, j] = [range[num][0] - 1, range[num][1] - 1];
    const [x, y] = [range[num][2] - 1, range[num][3] - 1];
    let result = 0;
    // 행 순회
    for (let a = i; a <= x; a++) {
      //열 순회
      for (let b = j; b <= y; b++) {
        result += array[a][b];
      }
    }
    answer.push(result);
  }

  return answer.join('\n');
}

console.log(solution(arr, sumRange));
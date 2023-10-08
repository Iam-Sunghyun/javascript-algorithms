// 백준 조합(완전 탐색) 실버3 https://www.acmicpc.net/problem/10972
const inputs = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const input = inputs[1].split(' ').map(Number);

function solution(numbers) {

  let target = 0;
  let index = -1;
  for (let i = numbers.length - 1; i >= 1; i--) {
    if (numbers[i] > numbers[i - 1]) {
      index = i - 1;
      target = numbers[i - 1];
      break;
    }
  }

  if (index === -1) return -1;

  let min = +Infinity;
  let swapIndex = 0;
  for (let i = index + 1; i < numbers.length; i++) {
    if (target < numbers[i] && min > numbers[i]) {
      min = Math.min(min, numbers[i]);
      swapIndex = i;
    }
  }

  [numbers[index], numbers[swapIndex]] = [numbers[swapIndex], numbers[index]];

  const beforeIndex = numbers.slice(0, index + 1);
  const afterIndex = numbers.slice(index + 1).sort((a, b) => a - b);

  return beforeIndex.concat(afterIndex).join(' ');
}

console.log(solution(input[1].split(' ').map(Number)));


// 풀이 2
function nextPermutation(arr) {
  const n = arr.length;
  let i = n - 2;

  // i를 찾음
  while (i >= 0 && arr[i] >= arr[i + 1]) {
    i--;
  }

  // 다음 순열이 없는 경우
  if (i === -1) {
    return false;
  }

  let j = n - 1;

  // arr[i]보다 큰 가장 작은 수를 찾음
  while (arr[i] >= arr[j]) {
    j--;
  }

  // arr[i]와 arr[j]를 Swap
  [arr[i], arr[j]] = [arr[j], arr[i]];

  // i+1부터 끝까지 정렬 (오름차순)
  let left = i + 1;
  let right = n - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return true;
}

if (nextPermutation(input)) {
  console.log(input.join(" ")); // 다음 순열 출력
} else {
  console.log(-1); // 다음 순열이 없는 경우 -1 출력
}
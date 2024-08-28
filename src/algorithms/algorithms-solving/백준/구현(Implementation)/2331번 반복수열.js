// https://www.acmicpc.net/problem/2331
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(" ");

function solution(numbers) {
  const sequence = [numbers[0]];
  let result = true;
  let until = null;
  let index = 0;

  // 수열 계산
  while (result) {
    let value = 0;
    for (let i = 0; i < sequence[index].length; i++) {
      value += (+sequence[index][i]) ** numbers[1];
    }
    sequence.push(String(value));
    index += 1;
    // 계산하면서 값이 처음 나온 것 인지 확인
    // 처음이 아니라면 false와 처음 나온 위치(반복 시작 위치) return
    [result, until] = isFirst(sequence, String(value), index);
  }

  return sequence.slice(0, until).length;
}

function isFirst(arr, target, index) {
  if (arr.includes(target)) {
    const targetIndex = arr.indexOf(target);
    if (targetIndex === index) {
      return [true, null];
    } else {
      return [false, targetIndex];
    }
  }
}

console.log(solution(input));

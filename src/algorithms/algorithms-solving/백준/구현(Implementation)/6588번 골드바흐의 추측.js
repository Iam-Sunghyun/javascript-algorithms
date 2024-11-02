// https://www.acmicpc.net/problem/6588
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(number, primes) {
  // 투 포인터
  const answer = [];
  let [left, right] = [0, primes.length - 1];
  let sum = 0;
  while (left < right) {
    let l = left;
    let r = right;
    while (l <= r) {
      let mid = Math.floor((l + r) / 2);

      if (primes[left] + primes[mid] === number) {
        answer.push(primes[left], primes[mid]);
        break;
      }
      if (primes[left] + primes[mid] > number) {
        r = mid - 1;
      } else if (primes[left] + primes[mid] < number) {
        l = mid + 1;
      }
    }
    left += 1;
    if (primes[left] >= number || answer.length === 2) break;
  }

  return answer.length < 2
    ? "Goldbach's conjecture is wrong."
    : `${number} = ${answer[0]} + ${answer[1]}`;
}

// 에라토스테네스의 체
const check = new Array(1000000 + 1).fill(true);
for (let i = 2; i <= Math.floor(1000000 ** 0.5); i++) {
  for (let j = i + i; j <= 1000000; j += i) {
    if (check[j] === false) continue;
    check[j] = false;
  }
}

const primes = [];
for (let i = 2; i < check.length; i++) {
  if (check[i] === true) {
    primes.push(i);
  }
}

const answer = [];
for (let i = 0; i < input.length - 1; i++) {
  answer.push(solution(input[i], primes));
}
console.log(answer.join("\n"));

// console.log(solution(input.slice(0, input.length - 1)))

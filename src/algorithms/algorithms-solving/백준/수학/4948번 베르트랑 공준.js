// 백준 4948번 기본 수학2 https://www.acmicpc.net/problem/4948
// 새 풀이 메모리 7배 줄이고 속도 4배 높게 나옴
const input = require("fs").readFileSync("/dev/stdin").toString().trim().split("\n").map(Number);

function solution(numbers) {
  // 최대 값 구하기
  let max = -Infinity;
  numbers.forEach((n) => {
    max = Math.max(max, n);
  });

  // 에라토스테네스의 체 배열 선언
  const primeCheck = new Array(max * 2 + 1).fill(true);
  [primeCheck[0], primeCheck[1]] = [false, false];

  // 에라토스테네스의 체
  // 2부터 최대 값 * 2의 제곱근까지 각 수의 곱들을 false(소수 아님) 체크크
  for (let i = 2; i <= Math.floor((max * 2) ** 0.5); i++) {
    for (let j = i + i; j <= max * 2; j += i) {
      primeCheck[j] = false;
    }
  }

  // 에라토스테네스의 체 배열을 이용해 0~i 범위 소수의 개수 계산
  const primeCount = new Array(max * 2 + 1).fill(0);
  for (let i = 2; i < primeCheck.length; i++) {
    if (primeCheck[i] === false) {
      // i가 소수가 아니면 이전 요소 값 그대로 유지
      primeCount[i] = primeCount[i - 1];
    } else {
      // i가 소수면 이전 요소 값에서 +1 하여 할당
      primeCount[i] = primeCount[i - 1] + 1;
    }
  }

  // n보다 크고 2n보다 작거나 같은 범위의의 소수 개수 계산
  const answer = [];
  for (let i = 0; i < numbers.length; i++) {
    answer.push(primeCount[numbers[i] * 2] - primeCount[numbers[i]]);
  }

  return answer.join("\n");
}

console.log(solution(input.slice(0, input.length - 1)));

// 이전 풀이. 1978번 함수를 그대로 재사용함.
// const input = require("fs").readFileSync("/dev/stdin").toString().trim().split(/\s/);
// input.pop();

// function getPrimeNumberFromMtoN(num) {
//   // 에라토스테네스의체 연산을 위한 배열 준비
//   const N = num * 2;
//   const M = num + 1;
//   const primeArray = new Array(N + 1).fill(true);
//   primeArray[0] = false;
//   primeArray[1] = false;

//   const answerArray = [];
//   // n이하의 소수를 에라토스테네의체를 이용해 구하고, 배열에 저장한다
//   for (let i = 2; i <= Math.floor(N ** 0.5); i++) {
//     for (let j = i * i; j <= N; j += i) {
//       if (primeArray[j] === false) continue;
//       primeArray[j] = false;
//     }
//   }
//   // primeArray 배열에서 소수이면서 m이상인 값들만 answer 배열에 저장한다
//   primeArray.forEach((num, i) => {
//     if (num === true && i >= M) answerArray.push(i);
//   });

//   console.log(answerArray.length);
// }

// for (let i = 0; i < input.length; i++) {
//   getPrimeNumberFromMtoN(+input[i]);
// }

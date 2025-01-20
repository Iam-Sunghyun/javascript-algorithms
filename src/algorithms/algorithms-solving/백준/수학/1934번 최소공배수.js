const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(numbers) {
  // 최대 공약수(GCD) 구하기
  const GCDs = [];
  for (const [a, b] of numbers) {
    let [n1, n2] = [a, b];
    while (n2 !== 0) {
      [n1, n2] = [n2, n1 % n2];
    }
    GCDs.push(n1);
  }
  // 두 수의 곱 / 두 수의 최대 공약수 === 두 수의 최대 공배수
  return numbers.map((n, i) => (n[0] * n[1]) / GCDs[i]).join("\n");
}

console.log(solution(input.slice(1)));

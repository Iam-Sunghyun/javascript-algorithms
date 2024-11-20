// https://www.acmicpc.net/problem/13305
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(load, cities) {
  let sum = 0n;
  for (let i = 0; i < cities.length - 1; i++) {
    let loadLength = BigInt(load[i]);

    let index = i;
    for (let j = i + 1; j < cities.length - 1; j++) {
      if (cities[i] < cities[j]) {
        loadLength += BigInt(load[j]);

        index = j;
      } else {
        break;
      }
    }
    sum += BigInt(cities[i]) * loadLength;
    i = index;
  }

  return sum.toString();
}

console.log(solution(input[1], input[2]));

const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);
const list = input.slice(1);

function solution(n) {

  const answer = [];

  for (let i = 0; i <= n.length - 8; i++) {
    const count = countWB(n);
    let sum = 0;
    for (let j = i; j < 8 + i; j++) {
      let erase = 0;
      if (count[j][0] < 4) {
        erase += Math.abs(count[j][0] - 4);
        count[j][1] -= Math.abs(count[j][0] - 4);
        count[j][0] += Math.abs(count[j][0] - 4);

      } else if (count[j][1] < 4) {
        erase += Math.abs(count[j][1] - 4);
        count[j][0] -= Math.abs(count[j][1] - 4);
        count[j][1] += Math.abs(count[j][1] - 4);
      }
      sum += erase;
    }
    answer.push(sum);
  }
  return Math.min(...answer);
}

function countWB(n) {
  const count = [];
  for (const str of n) {
    const WB = [0, 0];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === 'W') WB[0] += 1;
      else if (str[i] === 'B') WB[1] += 1;
    }
    count.push(WB);
  }
  return count;
}

console.log(solution(list));

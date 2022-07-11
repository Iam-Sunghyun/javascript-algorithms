// 백준 5585번 그리디 https://www.acmicpc.net/problem/1026
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split(/\n/);

function solution(money) {
  const coinList = [500, 100, 50, 10, 5, 1];
  let change = 1000 - money;
  let coinNum = 0;

  coinList.forEach(coin => {
    coinNum += Math.floor(change / coin);
    change %= coin;
  });

  return coinNum;
}

console.log(solution(input));
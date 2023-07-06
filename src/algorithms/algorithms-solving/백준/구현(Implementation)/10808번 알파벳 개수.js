// 백준 구현 브론즈4 https://www.acmicpc.net/problem/10808
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const count = new Array(26).fill(0);

  for (let i = 0; i < line.length; i++) {
    const index = line.charCodeAt(i) - 97;
    count[index]++;
  }

  const result = count.join(' ');
  console.log(result);
});
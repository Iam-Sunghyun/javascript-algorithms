// 백준 구현 브론즈1 https://www.acmicpc.net/problem/1259
function isPalindrome(num) {
  const str = String(num);
  const len = str.length;

  for (let i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) {
      return false;
    }
  }

  return true;
}

const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.on('line', (line) => {
  const number = parseInt(line);

  if (number === 0) {
    rl.close();
    return;
  }

  if (isPalindrome(number)) {
    console.log('yes');
  } else {
    console.log('no');
  }
});

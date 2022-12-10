// 백준 9012번 스택 https://www.acmicpc.net/problem/9012
const filePath = process.platform === 'linux' ? '/dev/stdin' : '../'+ __dirname + '/input.txt';
let input = require("fs").readFileSync(filePath).toString().split('\n');

function solution(str) {
  const answer = [];

  for (const x of str) {
    let count = 0;

    for (const i of x) {
      count += (i === '(' ? 1 : -1);
      if (count < 0) break;
    }
    answer.push(count !== 0 ? 'NO' : 'YES');
  }
  return answer.join('\n');
}


console.log(solution(input));

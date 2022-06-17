// 백준 11659번 문자열 https://www.acmicpc.net/problem/11659
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n');
const arr = input[1].split(' ').map(v => +v);
const cumsum = new Array(arr.length+1).fill(0);
const output = [];

// i부터 j까지 구간 합은 j까지의 구간 합 - i까지의 구간 합인 점을 이용
arr.forEach((v, i) => {
  cumsum[i+1] = cumsum[i] + v;
});


input.slice(2).forEach(ij => {
  const [i, j] = ij.split(' ').map(v => +v);
  output.push(cumsum[j]-cumsum[i-1]);
});

console.log(output.join('\n'));

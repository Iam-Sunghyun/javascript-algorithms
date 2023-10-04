// 백준 브루트 포스(조합) 실버1 https://www.acmicpc.net/problem/1342
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

function isLuckyString(str) {
  // 문자열 내에 동일한 문자가 연속으로 나타나면 행운의 문자열이 아님
  for (let i = 0; i < str.length - 1; i++) {
    if (str[i] === str[i + 1]) {
      return false;
    }
  }
  return true;
}

function generatePermutations(str, current, visited, count) {
  if (current.length === str.length) {
    if (isLuckyString(current)) {
      count[0]++;
    }
    return;
  }

  for (let i = 0; i < str.length; i++) {
    if (!visited[i]) {
      visited[i] = true;
      generatePermutations(str, current + str[i], visited, count);
      visited[i] = false;
    }
  }
}

function solution(str) {
  const visited = new Array(str.length).fill(false);ㄹ
  const count = [0]; // 행운의 문자열 개수를 저장할 배열

  generatePermutations(str, '', visited, count);

  return count[0];
}

const result = solution(input);
console.log(result);
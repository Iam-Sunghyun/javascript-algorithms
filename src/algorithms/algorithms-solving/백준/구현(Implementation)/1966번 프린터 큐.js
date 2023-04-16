// 백준 구현 실버3 https://www.acmicpc.net/problem/1966
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').slice(1).map(n => n.split(' ').map(Number));

function solution(docs) {
  const answer = [];

  for (let i = 0; i < docs.length; i += 2) {
    // 문서 리스트 항목이 하나라면 1번 push
    if (docs[i + 1].length === 1) {
      answer.push(1);
      continue;
    }
    // 내림차순 정렬시킨 문서 리스트 복사
    const sorted = [...docs[i + 1]].sort((a, b) => b - a);
    let docsLength = docs[i][0];
    let [times, docsIndex] = [0, 0];
    while (1) {
      if (docs[0] === sorted[0]) {
        docs.shift();
        sorted.shift();
        answer.push(times);
        docsIndex = - 1;
      } else {
        const notTarget = docs.shift();
        docs.push(notTarget);
        times += 1;
      }

      docsIndex = (docsIndex - 1) % docsLength;
    }
  }

  return answer;
}
console.log(solution(input));

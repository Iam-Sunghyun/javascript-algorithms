// 백준 누적합 실버1 https://www.acmicpc.net/problem/16139
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' '));

function solution(S, questions) {

  // 알파벳 누적합을 저장하기 위한 2차원 배열 생성
  // 2차원 배열의 요소는 알파벳 길이(25자) 크기를 갖고, S의 각 문자마다 연결되어있다.
  const alphabetCount = Array.from({ length: S.length }, () => new Array(26).fill(0));

  // 알파벳 개수 기록
  for (let i = 0; i < S.length; i++) {
    alphabetCount[i][S[i].charCodeAt() - 97] += 1;
  }

  // 알파벳 누적합 계산 
  for (let i = 1; i < alphabetCount.length; i++) {
    for (let j = 0; j < alphabetCount[i].length; j++) {
      alphabetCount[i][j] += alphabetCount[i - 1][j];
    }
  }

  // 누적합으로 정답 구하기
  const answer = [];
  for (let i = 2; i < questions.length; i++) {
    const [alphabet, start, end] = questions[i];
    const count = alphabet.charCodeAt() - 97;
    answer.push(alphabetCount[end][count] - (alphabetCount[start - 1]?.[count] || 0));
  }

  return answer.join('\n');
}

console.log(solution(input[0][0], input));
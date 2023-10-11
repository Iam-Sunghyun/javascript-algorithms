// 백준 시뮬레이션 실버5 https://www.acmicpc.net/problem/1417
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(Number);

function solution(candidateVotes, electionVotes) {
  let count = 0; // 선거인의 득표 수 증가 횟수

  while (candidateVotes[0] >= electionVotes) {
    // 현재 선거인이 최다 득표 후보를 이길 때까지 투표
    if (candidateVotes.length === 1) {
      // 현재 후보만 남았을 경우 선거인 스스로 투표
      return count;
    }

    const maxVotes = Math.max(...candidateVotes);
    const maxIndex = candidateVotes.indexOf(maxVotes);

    // 최다 득표 후보를 제외하고 선거인 스스로 투표
    candidateVotes[maxIndex] -= 1;
    electionVotes += 1;
    count += 1;
  }

  return count;
}

console.log(solution(input[1], input.slice(1)));

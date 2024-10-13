// https://school.programmers.co.kr/learn/courses/30/lessons/178871
function solution(players, callings) {
  const playerMap = new Map();
  const rankMap = new Map();
  for (let i = 0; i < players.length; i++) {
    playerMap.set(players[i], i + 1);
    rankMap.set(i + 1, players[i]);
  }

  for (const call of callings) {
    const after = playerMap.get(call) - 1;
    playerMap.set(rankMap.get(after), after + 1);
    playerMap.set(call, after);

    const tmp = rankMap.get(after);
    rankMap.set(after, call);
    rankMap.set(after + 1, tmp);
  }

  const answer = [];
  for (const p of rankMap.values()) {
    answer.push(p);
  }

  return answer;
}

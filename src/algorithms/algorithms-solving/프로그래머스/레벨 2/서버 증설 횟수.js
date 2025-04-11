// https://school.programmers.co.kr/learn/courses/30/lessons/389479
function solution(players, m, k) {
  // 이용자 m명 이상 증설
  // 서버 수 n
  // 서버 이용 시간 k
  const queue = []; // 증설된 서버 남은 시간 기록용
  let server = 0; // 현재 증설된 서버 수
  let answer = 0; // 증설 횟수
  for (const player of players) {
    const serverNeeds = Math.floor((player - server * m <= 0 ? 0 : player - server * m) / m);
    if (serverNeeds > 0) {
      server += serverNeeds;
      answer += serverNeeds;
      queue.push([serverNeeds, k]);
    }
    // queue에 기록된 증설 서버 시간 -1씩
    for (let i = 0; i < queue.length; i++) {
      queue[i][1] -= 1;
    }
    // 증설 시간 만료된 서버 제거
    while (queue[0]?.[1] === 0) {
      server -= queue[0][0];
      queue.shift();
    }
  }
  return answer;
}

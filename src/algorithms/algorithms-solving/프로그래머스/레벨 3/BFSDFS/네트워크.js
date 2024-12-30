// https://school.programmers.co.kr/learn/courses/30/lessons/43162
function solution(n, computers) {
  const list = Array.from({ length: n }, () => []);

  // 인접 리스트 생성
  for (let i = 0; i < computers.length; i++) {
    for (let j = 0; j < computers[i].length; j++) {
      if (i === j) continue;
      if (computers[i][j] === 1) {
        list[i].push(j);
      }
    }
  }

  let answer = 0;
  const check = new Array(n).fill(false);

  function BFS(n) {
    const queue = [n];

    while (queue.length > 0) {
      const next = queue.pop();
      for (let i = 0; i < list[next].length; i++) {
        if (check[list[next][i]] === false) {
          check[list[next][i]] = true;
          queue.push(list[next][i]);
        }
      }
    }
  }

  for (let i = 0; i < list.length; i++) {
    if (check[i] === false) {
      check[i] = true;
      BFS(i);
      answer += 1;
    }
  }

  return answer;
}

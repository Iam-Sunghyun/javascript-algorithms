// https://www.acmicpc.net/problem/2477
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" ").map(Number));

function solution(K, lists) {
  // 동1 서2 남3 북4
  const dy = [];
  const dx = [];

  // 가로, 세로 길이 구하기
  for (const [direction, distance] of lists) {
    if (direction === 1 || direction === 2) {
      dx.push(distance);
    } else {
      dy.push(distance);
    }
  }
  // 가로, 세로 길이 내림차순 정렬
  dx.sort((a, b) => b - a);
  dy.sort((a, b) => b - a);

  const area = dx[0] * dy[0];
  let minus = 0;
  for (let i = 0; i < lists.length; i++) {
    if (
      lists[i][0] === lists[(i + 2) % lists.length][0] &&
      lists[(i + 1) % lists.length][0] === lists[(i + 3) % lists.length][0]
    ) {
      minus = lists[(i + 1) % lists.length][1] * lists[(i + 2) % lists.length][1];
    }
  }

  return (area - minus) * K;
}

console.log(solution(input[0][0], input.slice(1)));

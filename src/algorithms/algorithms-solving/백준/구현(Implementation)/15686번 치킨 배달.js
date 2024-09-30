// 백준 구현 골드5 https://www.acmicpc.net/problem/15686
const input = require("fs")
  .readFileSync("/dev/stdin")
  .toString()
  .trim()
  .split("\n")
  .map((n) => n.split(" "));

function solution(M, map) {
  // 치킨집 좌표 구하기
  const chickenPos = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "2") {
        chickenPos.push([i + 1, j + 1]);
      }
    }
  }

  // 일반 집 좌표 구하기
  const housePos = [];
  for (let i = 0; i < map.length; i++) {
    for (let j = 0; j < map[i].length; j++) {
      if (map[i][j] === "1") {
        housePos.push([i + 1, j + 1]);
      }
    }
  }

  // 치킨집 좌표 조합 구하기
  const combResult = [];
  const tmp = new Array(M).fill(0);
  function combination(lv, start) {
    if (lv === M) {
      combResult.push([...tmp]);

      return;
    }
    for (let i = start; i < chickenPos.length; i++) {
      tmp[lv] = chickenPos[i];
      combination(lv + 1, i + 1);
    }
  }
  combination(0, 0);

  // 치킨 거리 최소합 구하기
  let sum = +Infinity;
  for (let i = 0; i < combResult.length; i++) {
    let tmp = 0;
    for (const [houseX, houseY] of housePos) {
      let tmp2 = +Infinity;
      for (let j = 0; j < combResult[i].length; j++) {
        for (const [chickenX, chickenY] of combResult[i]) {
          tmp2 = Math.min(Math.abs(houseX - chickenX) + Math.abs(houseY - chickenY), tmp2);
        }
      }

      tmp += tmp2;
    }
    sum = Math.min(tmp, sum);
  }

  return sum;
}
// combResult => [ [ [ 2, 3 ], [ 3, 3 ], [ 5, 5 ] ] ]
// housePos => [ [ 1, 3 ], [ 2, 5 ], [ 3, 2 ], [ 4, 3 ] ]

console.log(solution(+input[0][1], input.slice(1)));

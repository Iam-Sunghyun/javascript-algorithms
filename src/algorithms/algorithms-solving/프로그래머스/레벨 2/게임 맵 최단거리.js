/**
 * 프로그래머스 **레벨 2**
 * DFS/BFS https://school.programmers.co.kr/learn/courses/30/lessons/1844
 * @param {number[][]} maps 
 * @returns {number}
 */
function solution(maps) {
  const queue = [[0, 0, 0]];
  maps[0][0] = 0;

  while (queue.length) {
    const [y, x, move] = queue.shift();
    if (y === maps.length - 1 && x === maps[0].length - 1) return move + 1;

    // 상
    if (maps[y - 1] !== undefined && maps[y - 1][x] === 1) {
      queue.push([y - 1, x, move + 1]);
      maps[y - 1][x] = 0;
    }
    // 우
    if (maps[y][x + 1] === 1) {
      queue.push([y, x + 1, move + 1]);
      maps[y][x + 1] = 0;
    }
    // 하
    if (maps[y + 1] !== undefined && maps[y + 1][x] === 1) {
      queue.push([y + 1, x, move + 1]);
      maps[y + 1][x] = 0;
    }
    // 좌
    if (maps[y][x - 1] === 1) {
      queue.push([y, x - 1, move + 1]);
      maps[y][x - 1] = 0;
    }

  }

  return -1;
}



// console.log(solution([[1, 0, 1, 1, 1],
//                       [1, 0, 1, 0, 1],
//                       [1, 0, 1, 1, 1],
//                       [1, 1, 1, 0, 1],
//                       [0, 0, 0, 0, 1]]));


console.log(solution([[1, 1, 1, 1, 1],
                      [1, 1, 1, 1, 1],
                      [1, 1, 1, 1, 1],
                      [1, 1, 1, 1, 1],
                      [1, 1, 1, 1, 1]]));                      

// console.log(solution([[1, 1, 1, 1, 1],
//                       [0, 0, 1, 0, 1],
//                       [1, 0, 1, 1, 1],
//                       [1, 1, 1, 0, 1],
//                       [0, 0, 0, 0, 1]]));

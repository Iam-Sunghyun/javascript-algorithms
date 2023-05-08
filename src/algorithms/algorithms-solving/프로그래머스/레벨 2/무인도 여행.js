// 프로그래머스 레벨2 https://school.programmers.co.kr/learn/courses/30/lessons/154540?language=javascript
function solution(input) {
  const processedInput = input.map(str => str.split('').map(n => Number.isInteger(+n) ? +n : true));
  const check = Array.from({ length: input.length }, (_, i) => new Array(input[0].length).fill(0).map((_, j) => processedInput[i][j] === true ? true : false));
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  const answerList = [];
  // BFS
  function BFS(startX, startY) {
    check[startX][startY] = true;
    const queue = [[startX, startY]];
    let foods = processedInput[startX][startY];

    while (queue.length > 0) {
      let [nextX, nextY] = queue.pop();
      for (let i = 0; i < 4; i++) {
        // 다음 위치가 X가 아니면서 방문하지도 않은 경우 방문
        if (processedInput[nextX + dx[i]]?.[nextY + dy[i]] && check[nextX + dx[i]][nextY + dy[i]] === false) {
          check[nextX + dx[i]][nextY + dy[i]] = true;
          queue.push([nextX + dx[i], nextY + dy[i]]);
          foods += processedInput[nextX + dx[i]][nextY + dy[i]];
        }
      }
    }
    return foods;
  }

  for (let i = 0; i < processedInput.length; i++) {
    for (let j = 0; j < processedInput[i].length; j++) {
      if (check[i][j] === false) {
        const food = BFS(i, j);
        answerList.push(food);
      }
    }
  }

  return answerList.length === 0 ? [-1] : answerList.sort((a, b) => a - b);
}

console.log(solution(["X591X", "X1X5X", "X231X", "1XXX1"])); // [1, 1, 27]
console.log(solution(["XXX", "XXX", "XXX"])); // [-1]

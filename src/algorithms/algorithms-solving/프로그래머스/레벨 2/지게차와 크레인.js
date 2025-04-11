// https://school.programmers.co.kr/learn/courses/30/lessons/388353
function solution(storage, requests) {
  // 지게차와 크레인으로 물건을 옮길 수 있는 공간을 2차원 배열로 표현
  // + 2차원 배열에 겉 테두리 "empty"로 감싸기 -> BFS 탐색 시 테두리에서 시작하기 위함함
  const storageArr = storage.map((n) => ["empty", ...n.split(""), "empty"]);
  storageArr.splice(0, 0, new Array(storage[0].length + 2).fill("empty"));
  storageArr.push(new Array(storage[0].length + 2).fill("empty"));

  // 2차원 배열 BFS용 상하좌우 이동 값
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  // 총 물건 개수
  let sum = storage.length * storage[0].length;

  // BFS 방문 체크용 배열
  const check = Array.from({ length: storageArr.length }, () =>
    new Array(storageArr[0].length).fill(false)
  );

  // 지게차로 2차원 배열 테두리에 있는 대상 물건 확인용 BFS
  function BFS(target) {
    // (0,0)에서 시작
    const queue = [[0, 0]];
    const positions = [];
    // 방문 체크 배열 초기화
    check.forEach((n) => n.fill(false));
    check[0][0] = true;

    // BFS 탐색
    while (queue.length > 0) {
      const [x, y] = queue.pop();

      for (let i = 0; i < 4; i++) {
        // 상하좌우 중 처음 방문하면서 target인 좌표 구하기
        if (storageArr[x + dx[i]]?.[y + dy[i]] === target && check[x + dx[i]][y + dy[i]] !== true) {
          positions.push([x + dx[i], y + dy[i]]);
          check[x + dx[i]][y + dy[i]] = true;
        }
        // 상하좌우 중 아무것도 없는 공간(empty 값)인 경우 다음 방문을 위해 queue에 push
        if (
          storageArr[x + dx[i]]?.[y + dy[i]] === "empty" &&
          check[x + dx[i]][y + dy[i]] === false
        ) {
          queue.push([x + dx[i], y + dy[i]]);
          check[x + dx[i]][y + dy[i]] = true;
        }
      }
    }
    return positions;
  }

  for (const request of requests) {
    // 크레인 사용시
    if (request.length > 1) {
      for (let i = 0; i < storageArr.length; i++) {
        for (let j = 0; j < storageArr[i].length; j++) {
          if (storageArr[i][j] === request[0]) {
            storageArr[i].splice(j, 1, "empty");
            sum -= 1;
          }
        }
      }
    } else {
      // 지게차만 사용시 BFS를 통해 2차원 배열 테두리에 있는(지게차가 닿을 수 있는 위치) 대상 물건 확인
      const position = BFS(request);
      // BFS를 통해 구한 물건 위치에서 물건을 꺼내기
      for (let i = 0; i < position.length; i++) {
        const [x, y] = position[i];
        storageArr[x].splice(y, 1, "empty");
        sum -= 1;
      }
    }
  }

  return sum;
}

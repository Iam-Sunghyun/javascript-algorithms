// https://school.programmers.co.kr/learn/courses/30/lessons/172928
function solution(park, routes) {
  const dog = [0, 0];
  for (let i = 0; i < park.length; i++) {
    for (let j = 0; j < park[i].length; j++) {
      if (park[i][j] === "S") {
        [dog[0], dog[1]] = [i, j];
      }
    }
  }
  // 북 동 남 서
  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];
  for (const [direction, dc] of routes.map((n) => n.split(" "))) {
    // console.log(direction ,dc ,dog, dc * 3)
    let check = true;
    if (direction === "N" && park[dog[0] + dx[0] * dc]?.[dog[1] + dy[0] * dc] !== undefined) {
      for (let i = 1; i <= dc; i++) {
        if (park[dog[0] + dx[0] * i][dog[1] + dy[0] * i] === "X") {
          check = false;
          break;
        }
      }
      if (check === true) {
        dog[0] += dx[0] * dc;
        dog[1] += dy[0] * dc;
      }
    }
    if (direction === "E" && park[dog[0] + dx[1] * dc]?.[dog[1] + dy[1] * dc] !== undefined) {
      for (let i = 1; i <= dc; i++) {
        if (park[dog[0] + dx[1] * i][dog[1] + dy[1] * i] === "X") {
          check = false;
          break;
        }
      }
      if (check === true) {
        dog[0] += dx[1] * dc;
        dog[1] += dy[1] * dc;
      }
    }
    if (direction === "S" && park[dog[0] + dx[2] * dc]?.[dog[1] + dy[2] * dc] !== undefined) {
      for (let i = 1; i <= dc; i++) {
        if (park[dog[0] + dx[2] * i][dog[1] + dy[2] * i] === "X") {
          check = false;
          break;
        }
      }
      if (check === true) {
        dog[0] += dx[2] * dc;
        dog[1] += dy[2] * dc;
      }
    }
    if (direction === "W" && park[dog[0] + dx[3] * dc]?.[dog[1] + dy[3] * dc] !== undefined) {
      for (let i = 1; i <= dc; i++) {
        if (park[dog[0] + dx[3] * i][dog[1] + dy[3] * i] === "X") {
          check = false;
          break;
        }
      }
      if (check === true) {
        dog[0] += dx[3] * dc;
        dog[1] += dy[3] * dc;
      }
    }
  }

  return dog;
}

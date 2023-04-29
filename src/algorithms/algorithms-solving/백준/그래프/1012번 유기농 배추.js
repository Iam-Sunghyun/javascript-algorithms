// 백준 그래프 탐색 실버2 https://www.acmicpc.net/problem/1012
const input = require('fs').readFileSync('/dev/stdin').toString().trim().split('\n').map(n => n.split(' ').map(Number));

// 배추밭에 필요한 벌레 수 계산 함수
function solution(input) {

  const field = [...input]; // 원본 복사

  // DFS 탐색용 4방향 값(북동서남)
  const dx = [-1, 0, 1, 0]; // 행
  const dy = [0, 1, 0, -1]; // 열

  // DFS
  function DFS(x, y) {
    field[x][y] = 0; // 방문 확인

    // x, y 주변 4방향(북동남서) 탐색. 
    for (let i = 0; i < 4; i++) {
      if (field[x + dx[i]]?.[y + dy[i]] === 1) {
        DFS(x + dx[i], y + dy[i]);
      }
    }
  }

  // DFS로 배추밭에 배추가 모여있는 부분 탐색
  let answer = 0;
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input[i].length; j++) {
      // 배추가 있는 땅이라면 DFS로 탐색하고, 배추가 연결 되어있는 부분을 모두 체크
      if (field[i][j] === 1) {
        DFS(i, j);
        answer += 1;   // DFS로 체크가 모두 끝났다면 즉, 모여있는 배추 구역 하나를 확인했다면 answer에 추가해줌
      }
    }
  }
  DFS(0, 0);

  return answer;
}

// 입력 데이터 가공 -> 테스트 케이스 수만큼 배추밭(2차원 배열) 생성
for (let i = 0; i < input.length; i++) {

  // input 요소가 새 배추밭 정보라면 새 배추밭 생성
  if (input[i].length === 3) {
    const [column, row, warms] = input[i];
    const field = Array.from({ length: row }, n => new Array(column).fill(0));

    // 새 배추밭에 배추 정보 추가
    for (let j = i + 1; j <= i + warms; j++) {
      field[input[j][1]][input[j][0]] = 1;
    }

    // 완성된 배추밭 solution 함수에 전달
    console.log(solution(field));
  }
}


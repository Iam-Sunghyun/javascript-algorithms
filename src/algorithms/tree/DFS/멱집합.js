/**
 * DFS로 1~n으로 이루어진 집합의 공집합을 제외한 모든 부분집합(멱집합) 구하기. check 배열로 방문 여부 기록하는 것 주의
 * @param {number} n 집합 요소 최대 값
 * @returns {string[]} 멱집합
 */
function solution(n) {
  // 방문 여부 확인용 배열. 0 인덱스 사용하지 않으므로 +1 크기 배열 사용
  const check = new Array(n + 1).fill(false);
  const answer = [];

  function DFS(node) {

    // 재귀 종료 시
    if (node > n) {
      const tmp = [];
      for (let i = 1; i <= check.length; i++) {
        if (check[i]) tmp.push(i);
      }
      // 공집합 제외
      if (tmp.length !== 0) answer.push(tmp);
      return;
    }

    check[node] = true;
    DFS(node + 1);
    check[node] = false;
    DFS(node + 1);
  }

  DFS(1);

  return answer;
}

console.log(solution(3)); //

// 입력이 배열로 주어질 때 멱집합 구하기 #1
function solution2(nodes) {
  const check = new Array(nodes.length - 1).fill(false);
  const list = [];

  function DFS(lv) {
    if (lv > nodes.length - 1) {
      const sub = [];
      check.forEach((n, i) => {
        if (n) sub.push(nodes[i]);
      });
      list.push(sub);
      return;
    }
    check[lv] = true;
    DFS(lv + 1);
    check[lv] = false;
    DFS(lv + 1);
  }

  DFS(0);

  return list;
}

console.log(solution2([-7, -3, -2, 5, 8]));

// 입력이 배열로 주어질 때 멱집합 구하기 #2, 체크 배열 없이 구현
function solution3(nodes) {
  const subarr = [];

  function DFS(lv) {
    if (lv > nodes.length - 1) {
      console.log(subarr);
      return;
    }
    subarr.push(nodes[lv]);
    DFS(lv + 1);
    subarr.pop();
    DFS(lv + 1);
  }

  DFS(0);

  return;
}

console.log(solution3([-7, -3, -2, 5, 8]));
/**
 * 1~n 까지 값으로 이루어진 집합의 모든 부분집합(멱집합) 구하기. check 배열로 방문 여부 기록하는 것 주의
 * @param {number} n 집합 요소 최대 값
 * @returns {string[]} 멱집합 
 */
function solution(n) {
  const check = new Array(n + 1).fill(false);
  const answer = [];

  function DFS(node) {
    if (node > n) {
      let tmp = '';
      for (let i = 1; i <= check.length; i++) {
        if (check[i]) tmp += i + ' ';
      }

      if(tmp !== '') answer.push(tmp.trim());
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

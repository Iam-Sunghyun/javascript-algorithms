/**
 * 합이 같은 부분집합이 존재하는지 체크하는 함수
 * @param {number[]} 숫자 배열 
 * @returns {number[][]} 합이 같은 부분집합들
 */
function solution(nums) {
  const check = new Array(nums.length).fill(false);   // 재귀 방문여부 체크 배열
  const sum = nums.reduce((acc, n) => acc + n, 0) / 2;   // 전체 집합 합 / 2
  const answer = [];
  
  function DFS(lv, sub) {
    if (sub > sum) return;
    // DFS로 모두 탐색한 경우
    if (lv === nums.length ) {

      // 합이 같은 서로소 집합 중 하나라면 answer에 삽입
      if (sub === sum) {
        const tmp = [];
        for (let i = 0; i < check.length; i++){
          if (check[i]) tmp.push(nums[i]);
        }
        answer.push(tmp);
      }
      return;
    }
    check[lv] = true;
    DFS(lv + 1, sub + nums[lv]);
    check[lv] = false;
    DFS(lv + 1, sub);
  }

  DFS(0, 0)

  return answer;
}

console.log(solution([1, 3, 5, 6, 7, 10]));

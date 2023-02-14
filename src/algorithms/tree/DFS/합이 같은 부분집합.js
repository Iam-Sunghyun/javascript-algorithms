/**
 * 합이 같은 부분집합이 존재하는지 체크하는 함수
 * @param {number[]} 숫자 배열 
 * @returns {number[][]} 합이 같은 부분집합들
 */
function solution(nums) {
  // 재귀 방문여부 체크 배열
  const check = new Array(nums.length - 1).fill(false);

  // 비교할 값 = 전체 집합 합 / 2
  let sum = nums.reduce((acc, n) => acc + n, 0) / 2;
  let answer = [];

  function DFS(lv, sub) {
    // 트리 높이를 넘어섰거나 or 부분집합 합이 나머지보다 큰 경우 종료
    if (lv > nums.length || sub > sum) {

      // but 합이 같은 부분집합이라면 answer에 삽입
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

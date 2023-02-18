/**
 * 최소한의 동전으로 거스름 돈을 계산하는 방법. 중복순열과 거의 동일
 * @param {nums[][]} [0] 동전 개수, [1] 동전 종류, [2] 거스름 돈
 * @returns {number} 거스름 동전 최소 개수
 */
function solution(nums) {
  const coins = nums[1];
  const change = nums[2];
  let answer = Number.MAX_SAFE_INTEGER;

  // lv은 재귀 깊이이자 동전 개수를 의미
  function DFS(lv, sum) {
    // 거스름 돈이 충족됐다면 더 작은 값 answer에 저장
    if (sum === change) {
      answer = Math.min(answer, lv);
      return;
    }
    // 동전 개수가 앞서 확인한 최소 경우보다 많다면 재귀 취소
    if (sum > change || lv >= answer) return;

    for (let i = 0; i < coins.length; i++) {
      DFS(lv + 1, sum + coins[i]);
    }
  }

  DFS(0, 0);
  return answer;
}

console.log(solution([3, [1, 2, 5], 15]));

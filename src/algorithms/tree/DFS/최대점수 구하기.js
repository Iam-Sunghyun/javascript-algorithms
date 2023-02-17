/**
 * 제한 시간안에 문제를 풀이하여 얻을 수 있는 최대점수 구하기
 * @param {number[][]} [0] [문제 수, 제한 시간], [1] 이후 [문제 점수, 걸리는 시간]
 * @returns {number} 최대 점수
 */
function solution(nums) {
  const limit = nums[0][1];
  let maxScore = 0;

  // lv-> 재귀 깊이, sum -> 점수 합, time -> 소요 시간
  function DFS(lv, sum, time) {

    // 제한 시간 초과라면 바로 재귀 종료
    if (time > limit) return;
    
    // 제한 시간 초과하지 않은 경우 값 확인 및 갱신
    if (lv > nums.length - 1) {
      if (sum > maxScore) maxScore = sum;
      return;
    }

    // 문제 푼 경우, 안 푼 경우 재귀
    DFS(lv + 1, sum + nums[lv][0], time + nums[lv][1]);
    DFS(lv + 1, sum, time);
  }

  // 입력 배열의 1번 요소부터 시작
  DFS(1, 0, 0);

  return maxScore;
}

console.log(
  solution([
    [5, 20],
    [10, 5],
    [25, 12],
    [15, 8],
    [6, 3],
    [7, 4],
  ])
); //

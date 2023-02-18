/**
 * N개의 값 중 M개를 뽑아 나열하는 경우의 수(순열). 체크 배열을 사용해 사용된 숫자 확인한다는 것 기억
 * @param {number[][]} [0] [N, M], [1] 숫자 리스트
 * @returns {number[][]} 순열의 모든 경우
 */
function solution(nums) {
  const M = nums[0][1]; // 뽑는 갯수
  const numbers = nums[1]; // 뽑을 숫자들
  const tmp = new Array(M).fill(0); // 뽑은 숫자 저장용 배열
  const check = new Array(numbers.length).fill(false); // ※ 사용된 숫자 기록용 배열
  const answer = [];

  // lv은 재귀의 깊이이자 뽑은 개수를 의미
  function DFS(lv) {
    if (lv === M) {
      answer.push([...tmp]);
      return;
    }
    for (let i = 0; i < numbers.length; i++) {
      // 이전 lv의 재귀 호출에서 사용된 숫자라면 continue
      if (check[i] === true) continue;

      // 아니라면 tmp의 lv번째에 삽입, 체크 배열에 사용했음(true)으로 기록
      tmp[lv] = numbers[i];
      check[i] = true;
      DFS(lv + 1);
      check[i] = false; // 재귀 종료 후 돌아왔을 때 숫자 사용 여부를 되돌려 놓는다
    }
  }

  DFS(0);

  return answer;
}

console.log(
  solution([
    [3, 2],
    [3, 6, 9],
  ])
);

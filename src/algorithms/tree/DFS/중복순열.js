/**
 * 1~N 까지 숫자 중 중복을 허용하여 M개를 뽑는 경우의 수
 * @param {number[]} [N, M]
 * @returns {number[][]} 중복순열의 모든 경우
 */
function solution(nums) {
  const N = nums[0]; // 1 부터 N까지의 'N'
  const M = nums[1]; // 뽑는 갯수
  const tmp = new Array(M).fill(0); // 뽑은 숫자 저장용 배열
  const answer = [];

  function DFS(lv) {
    if (lv === M) {
      // answer.push(tmp); 처럼 바로 삽입하는 경우 얕은 복사로 인해 
      // answer의 모든 요소에 tmp 참조가 저장되어 결국 하나의 값이 되어버림. 따라서 result에 복사하여 push() 해준다
      const result = [...tmp];
      answer.push(result);
      return;
    }
    for (let i = 1; i <= N; i++) {
      tmp[lv] = i;
      DFS(lv + 1);
    }
  }

  DFS(0);

  return answer;
}

console.log(solution([3, 2])); 

/**
 * 선택할 수 있는 값이 배열로 주어지는 경우. solution 함수와 동일하나 for문 범위와 tmp에 입력하는 요소 값의 차이가 있다.
 * @param {number[]} nums - 고를 수 있는 숫자 배열
 * @param {number} n - 뽑는 수
 * @returns {number[][]} 중복순열의 모든 경우
 */
function solution2(nums, n) {
  const tmp = new Array(n).fill(0); // 뽑은 숫자 저장용 배열
  const answer = [];

  function DFS(lv) {
    if (lv === n) {
      const result = [...tmp];
      answer.push(result);
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      tmp[lv] = nums[i];
      DFS(lv + 1);
    }
  }

  DFS(0);
  return answer;
}

console.log(solution2([3,5,6,7,8], 3)); 

/**
 * 슬라이딩 윈도우(sliding window) 예제
 * - nums 배열에서 합이 sum보다 크거나 같은 부분 배열 중 가장 길이가 작은 배열의 길이를 구하는 함수
 * 부분 배열은 연속된 값이어야 하고 없을 경우 0을 return 한다
 * @param {number[]} nums
 * @param {number} sum 
 * @returns {number[]}
 */
function minSubArrayLen(nums, sum){
  let total = 0;
  let start = 0;
  let end = 0;
  let minLen = Infinity;
 
  while (start < nums.length) {
    // 현재 윈도우의 합이 sum에 미치지 못할 경우 윈도우 이동
    if(total < sum && end < nums.length){
      total += nums[end];
			end++;
    }
    // 현재 윈도우 합이 sum 이상일 경우 윈도우 크기를 줄임
    else if(total >= sum){
      minLen = Math.min(minLen, end-start);
			total -= nums[start];
			start++;
    } 
    else {
      break;
    }
  }
 
  return minLen === Infinity ? 0 : minLen;
}

console.log(minSubArrayLen([2,3,1,2,4,3], 7)); // 2 [4,3]
console.log(minSubArrayLen([2,1,6,5,4], 9)); // 2 [5,2]
console.log(minSubArrayLen([3,1,7,11,2,9,8,21,33,19], 52)); // 1 [62]
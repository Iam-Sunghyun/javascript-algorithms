/**
 * 슬라이딩 윈도우(sliding window)
 * - 투 포인터는 2개의 포인터가 조건에 따라 '각각' 이동하면서 값이나 범위를 찾는 것이었다면 
 * 슬라이딩 윈도우는 마치 미닫이 창문을 움직이는 것처럼 구간을 이동하면서 값을 찾는다
 * 구간(창문)은 단일 변수, 부분 배열, 다른 문자열이 될 수 있다
 * 규모가 큰 데이터에서 하위 데이터 집합을 찾는데 유용
 * 
 * - 입력받은 배열에서 길이가 range인 부분 배열 중 합이 가장 큰 경우를 구하는 함수
 * 1. 단순한 방법 O(n^2)
 * @param {number[]} arr
 * @param {number} range
 * @returns {number}
 */
function maxSubarraySum(arr, range){
  if(range > arr.length) return 0;

  // 배열의 요소들이 음수인 경우를 위해 -Infinity
  let max = -Infinity;

  for(let i = 0; i < arr.length - range; i++){
    let temp = 0;
    for(let j = 0; j < range; j++){
      temp += arr[i + j];
    }
    if(max < temp)max = temp;
  }

  return max;
}

console.log(maxSubarraySum([1,3,4,2,6,3,8,8,2], 3)); //

/**
 * 2. 슬라이딩 윈도우를 이용한 방법
 * 1번의 반복으로 가장 큰 값을 구해낸다 O(n)
 */
function maxSubarraySum2(arr, range){
  if(range > arr.length) return 0;

  let left = 0;
  let right = left + range - 1;
  let max = -Infinity;
  let maxIndex = [];
  let sum = 0;
  for(let i = 0; i < range; i++ ){
    sum += arr[i];
  }

  while(right <= arr.length){
     if(sum > max){ 
       max = sum;
       maxIndex = [left, right]; 
     }
     // 윈도우 이동
     sum -= arr[left++];
     sum += arr[++right];
  }
  return [max, maxIndex];
}

// 시간 체크용 함수
function checkPerformance(f1, f2, n){
  const arr = [];
  for(let i = 0; i < n; i++){
    arr.push(Math.floor(Math.random() * 100000));
  }
  const t1 = performance.now();
  f1(arr, 50);
  const t2 = performance.now();
  const t3 = performance.now();
  f2(arr, 50);
  const t4 = performance.now();
  console.log((t2 - t1) / 1000);
  console.log((t4 - t3) / 1000);
}

checkPerformance(maxSubarraySum, maxSubarraySum2, 1000000); // 구간의 범위가 클수록 속도 차가 점점 커짐.
console.log(maxSubarraySum2([1,3,4,2,3,4,5,6,8,9,9], 4));
/**
 * 투 포인터(two pointer) 알고리즘 예제 
 * - 아래는 오름차순 정렬 된 정수 배열에서 고유한 값의 개수를 구하는 함수
 * 1. 투 포인터를 이용한 방법1
 * @param {number[]} arr 
 * @returns {number} 
 */
function countUniqueValue1(arr){
  if(arr.length === 0) return 0;
  let left = 0;
  let right = 1;
  // 정렬 안되어있을 경우 대비...
  arr.sort((a, b) => a - b);

  // 포인터가 가리키는 요소를 비교해 고유한 값을 배열의 맨 앞에 쌓아간다
  // ex) [-2,-1,-1,0,1] left: 0, right: 1  
  //    => [-2,-1,-1,0,1]  left: 1, right: 2 
  //    => [-2,-1,-1,0,1]  left: 1, right: 3 
  //    => [-2,-1,0,0,1]   left: 2, right: 4
  //    => [-2,-1,0,1,1]   left: 3, right: 5  done!
  while(right < arr.length){
    if(arr[left] !== arr[right]){
      arr[left + 1] = arr[right];
      left++;
    }
      right++;
  }
  // 반복문을 거친 left값이 고유한 값의 마지막 인덱스가 된다
  return left + 1;
}

console.log(countUniqueValue1([1,1,1,1,1,1,2])); // 2
console.log(countUniqueValue1([1,7,3,4,4,7,2,2])); // 5
console.log(countUniqueValue1([-2,-1,-1,0,1])); // 4
console.log(countUniqueValue1([1,2,3,4,5])); // 5
console.log(countUniqueValue1([])); // 0

/**
 * 2. 투 포인터를 이용한 방법2 
 * 두 포인터가 항상 동시에 이동하며 구간을 찾는 점이 투 포인터라기보단 '슬라이딩 윈도우'에 가까워 보인다
 * 2개의 포인터가 모두 시작지점에서 출발해 인접한 값들을 비교해나간다
 * 더 간단한 방법은 Set객체로 만드는 것!
 * @param {number[]} arr 
 * @returns {number} 
 */
function countUniqueValue2(arr){
  if(arr.length === 0) return 0;
  let answer = 1;
  let left = 0;
  let right = 1;
  arr.sort((a, b) => a - b);
  
  while(right < arr.length){
    if(arr[left] !== arr[right]) answer++;
    left++;
    right++;
  }
  return answer;
}

console.log(countUniqueValue2([1,1,1,1,1,1,2])); // 2
console.log(countUniqueValue2([1,7,3,4,4,7,2,2])); // 5
console.log(countUniqueValue2([-2,-1,-1,0,1])); // 4
console.log(countUniqueValue2([])); // 0
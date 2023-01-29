/**
 * 투 포인터(two pointer) 알고리즘 예제
 * - 오름차순 정렬된 2개의 배열을 입력받아 하나의 오름차순 정렬된 배열로 합치는 함수
 * 2개의 배열을 concat한 뒤 sort해주면 훨씬 간단하지만 O(nlogn)의 시간복잡도를 갖는다
 * 다음과 같이 투 포인터 패턴을 사용하면 O(n+m) 만큼의 효율을 보인다 (n, m은 각각 입력받은 두 배열의 길이)
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 * @returns {number[]}
 */
function solution(arr1, arr2) {
  const answer = [];
  // two pointer
  let left = 0;
  let right = 0;
  
  // 2개의 배열 중 하나라도 포인터가 배열의 유효한 범위 내에 있으면 계속된다
  while(arr1[left] || arr2[right]){
    if(arr1[left] < arr2[right]){
      answer.push(arr1[left]);
      left++;
    }else{
      answer.push(arr2[right]);
      right++;
    }
  }
  return answer;
}
console.log(solution([1,3,5], [2,3,6,7,9])); // [1,2,3,3,5,6,7,9]
console.log(solution([1,2,3], [3,4,5,7])); // [1,2,3,3,4,5,7]

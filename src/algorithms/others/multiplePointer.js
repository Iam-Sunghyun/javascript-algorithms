/**
 * - 다중 포인터(multiple pointer, 투 포인터)
 * 강의에서 임의로 지정한 명칭 투 포인터도 여기에 포함 됨
 * 선형 자료구조(배열, 연결리스트, 문자열)에서 인덱스나 값을 가리키는 2개 이상의 포인터를
 * 특정 조건에 따라 이동시키면서 원하는 값이나 구간을 찾는 알고리즘 패턴
 * 같은 지점으로 이동하거나(끝에서 시작으로 or 시작에서 끝으로), 양끝에서 중간지점으로 이동하거나,
 * 한 포인터는 한방향으로 이동하고 다른 포인터는 양방향으로 이동해가는 방식이 있다
 * 공간복잡도도 효율적이다
 * 
 * 오름차순 정렬된 정수 배열을 매개변수로 받아 두 요소의 합이 target값과 일치하는 첫번째 쌍을 찾아내는 함수
 * 두 포인터가 모두 시작지점에서 끝을 향해 이동한다
 * 1. 간단한, 단순한 방법 O(n^2)
 * @param {number[]} arr 
 * @returns {number[]}
 */
function sumZero(arr, target){
  // 2중 for문으로 모든 요소를 순회한다
  for(let i = 0; i < arr.length; i++){
    for(let j = i + 1; j < arr.length; j++){
      if(arr[i] + arr[j] === target){
        return [arr[i], arr[j]];
      }
    }
  }
  return -1;
}
console.log(sumZero([-4,-3,-2,-1,0,1,2,5], 0)); // [-2, 2]

// 2. 개선된 방법 O(n)
// 두 포인터가 양 끝 지점에서 시작하여 중앙쪽으로 이동한다
function pointerSumZero(arr, target){
  let left = 0;
  let right = arr.length - 1;
  while(left < right){
    const sum = arr[left] + arr[right];
    // 두 요소 합이 target과 일치시 return
    if(sum === target) return [arr[left], arr[right]];

    // 두 요소 합이 target보다 크면 right을 감소
    else if(sum > target) right--;

    // 두 요소 합이 target보다 작면 left를 증가
    else left++;
    
  }
  return -1;
}

console.log(sumZero([-4,-3,-2,-1,0,1,2,5], 0)); // [-2, 2]

// 시간 체크용 함수
function checkPerformance(f, n){
  const arr = [];
  for(let i = -(n/2); i < n/2; i++){
    arr.push(i);
  }
  const t1 = performance.now();
  f(arr);
  const t2 = performance.now();
  console.log((t2 - t1) / 1000);
}

checkPerformance(sumZero, 10000);
checkPerformance(pointerSumZero, 10000); // 투 포인터 패턴이 훨씬 빠른 실행속도를 보인다
/**
 * 이진 탐색(binary search) O(logn)
 * 오름차순 정렬된 배열, 시작과 끝 index, 찾고자하는 값을 인수로 전달하면
 * 해당 값이 있을 경우 index를 return, 없을 경우 문자열을 출력하는 이진 탐색 함수
 * @param {number[]} arr 
 * @param {number} low 
 * @param {number} high 
 * @param {number} key 
 * @returns {number} 
 */
function binarySearch(arr, low, high, key) {
  if(low >= high) return 'no key value';
  let mid = Math.floor((high + low) / 2);

  if(key === arr[mid]){
    return 'key index is ' + mid;
  }
  if(key > arr[mid]){
    return binarySearch(arr, mid+1, high, key);
  }
  if(key < arr[mid]){
    return binarySearch(arr, low, mid-1, key);
  }
}

// 반복문을 이용한 방법
function binarySearch2(arr, key) {
  let start = 0;
  let end = arr.length-1;

  while(end >= start){
    const mid = Math.floor((start + end)/2);
    if(arr[mid] === key)
      return 'key index is ' + mid;

    if(arr[mid] > key)
      start = mid + 1;

    if(arr[mid] < key)
      end = mid - 1;
  }
  return 'no key value';
}

const arr = [1,2,3,4,5,6,7,8,9,10]

console.log(binarySearch(arr, 0, arr.length-1, 0));
console.log(binarySearch2(arr, 5));
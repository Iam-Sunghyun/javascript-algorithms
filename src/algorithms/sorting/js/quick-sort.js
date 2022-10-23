function swap(arr, a, b) {
  const temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function quickSort(arr, start, end) {
  if (end <= start) return;
  const pivot = start;
  let left = start + 1;
  let right = end;

  // 모든 요소를 비교하교 right, left가 어긋날 때 까지
  while (right >= left) {

    // left가 end보다 작거나 같고, left 위치의 요소가 피벗보다 작거나 같다면 left + 1
    while (left <= end && arr[left] <= arr[pivot]) {
      left++;
    }
    // right가 start보다 크고, right 위치의 요소가 피벗보다 크다면 right - 1
    while (right > start && arr[right] > arr[pivot]) {
      right--;
    }
    // 모든 요소를 비교했다면 right과 피벗 교환
    if (left > right) {
      swap(arr, pivot, right);
    // 아니면 left, right 요소 교환
    } else {
      swap(arr, left, right);
    }
    console.log(arr, left, right)
  }
  // 재귀
  quickSort(arr, start, right - 1);
  quickSort(arr, left, end);
}

const arr = [
  2,2,3,2,4,5,6,7,8,2
]
// for (let i = 0; i < 10; i++) {
//   arr.push(Math.floor(Math.random() * 100));
// }


quickSort(arr, 0, arr.length - 1);


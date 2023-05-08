function mergeSort2(arr) {

  if (arr.length > 1) {

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle, arr.length);

    mergeSort2(left);
    mergeSort2(right);

    let [i, j, k] = [0, 0, 0];

    while (i < left.length && j < right.length) {
      if (left[i] <= right[j]) {
        arr[k] = left[i];
        i++;
      } else {
        arr[k] = right[j];
        j++;
      }
      k++;
    }

    // 남은 오른/왼쪽 배열 값 검사
    while (i < left.length) { // 왼쪽 배열에 값이 남아있는 경우
      arr[k] = left[i];
      i++;
      k++;
    }
    while (j < right.length) {  // 오른쪽 배열에 값이 남아있는 경우
      arr[k] = right[j];
      j++;
      k++;
    }
  }
}

const arr = [];
for (let i = 0; i < 10; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

const n = arr.length;
console.log("UnSorted array: ");
console.log(arr);

const startTime = new Date().getTime();
mergeSort2(arr, n); 
const endTime = new Date().getTime();

console.log("Sorted array: ");
console.log(arr);
// 수행 시간 측정 (s) 1000개 이상은 되어야 측정되기 시작함
console.log((endTime - startTime) / 1000);
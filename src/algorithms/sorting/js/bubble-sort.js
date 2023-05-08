export default function bubbleSort(originalArray) {

  let changed;
  // 원본 변경 지양하자
  const arr = [...originalArray];

  for (let i = 0; i < arr.length - 1; i++) {
    changed = false;

    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        changed = true;
      }
    }
    if (!changed) break;
  }

  return arr;
}

// 간이 테스트
const arr = [];
for (let i = 0; i < 15; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log("UnSorted array: ");
console.log(arr);

const sorted = bubbleSort(arr);
console.log("Sorted array: ");
console.log(sorted);

export default function selectionSort(originalArray) {

  let minIndex;
  // 원본 보존
  const arr = [...originalArray];

  for (let i = 0; i < arr.length - 1; i++) {
    minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[minIndex] > arr[j])
        minIndex = j;
    }

    [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
  }

  return arr;
}

const arr = [];
for (let i = 0; i < 15; i++) {
  arr.push(Math.floor(Math.random() * 100));
}

console.log("UnSorted array: ");
console.log(arr);

const sorted = selectionSort(arr);
console.log("Sorted array: ");
console.log(sorted);

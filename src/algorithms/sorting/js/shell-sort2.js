function shellSort2(arr) {
  let gap = Math.floor(arr.length / 2);

  while (gap > 0) {
    for (let i = 0; i < arr.length - gap; i++) {
      let currentIndex = i;
      let gapShiftedIndex = i + gap;

      while (currentIndex >= 0) {
        if (arr[gapShiftedIndex] <= arr[currentIndex]) {
          const temp = arr[currentIndex];
          arr[currentIndex] = arr[gapShiftedIndex];
          arr[gapShiftedIndex] = temp;
        }

        gapShiftedIndex = currentIndex;
        currentIndex -= gap;
      }
    }
    gap = Math.floor(gap / 2);
  }
  return arr;
}

function printArray(arr)
{
    let n = arr.length;
        for (let i = 0; i < n; ++i)
          process.stdout.write(`${arr[i]}`+ ` `); //nodejs에서 콘솔창에 줄 바꿈 없이 출력하는 법 
        console.log("\n");
}

let arr = [];
for (i = 0; i < 10; i++)
  arr.push(Math.floor(Math.random() * 100));

let n = arr.length;

console.log("UnSorted array: ");
printArray(arr, n);

let startTime = new Date().getTime();
shellSort2(arr, n);
let endTime = new Date().getTime();

console.log("Sorted array: ");
printArray(arr, n);
// 수행 시간 측정 (s) 1000개 이상은 되어야 측정되기 시작함
console.log((endTime-startTime) / 1000);

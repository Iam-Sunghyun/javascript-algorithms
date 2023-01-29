export default function shellSort(originalArray){

  // 원본 보존
  const arr = [...originalArray];
  
  let gap = Math.floor(arr.length / 2);

  while (gap > 0){
 
    // gap이 짝수인 경우 홀수로 만들어 줌.
    // gap = gap % 2 ? gap : gap + 1;

    for(let i = 0; i < (arr.length - gap); i += 1){
      let currentIndex = i;
      let gapShitedIndex = i + gap;

      while(currentIndex >= 0){

        if(arr[gapShitedIndex] < arr[currentIndex]){

          [arr[currentIndex], arr[gapShitedIndex]] = [arr[gapShitedIndex], arr[currentIndex]];

        }

        gapShitedIndex = currentIndex;
        currentIndex -= gap;
      }
    }

    gap = Math.floor(gap / 2)
  }

  return arr;
}

// 테스트
const arr = [];
for (let i = 0; i < 15; i++){
  arr.push(Math.floor(Math.random() * 100));
}

console.log("UnSorted array: ");
console.log(arr);
 
const sorted = shellSort(arr);
console.log("Sorted array: ");
console.log(sorted);

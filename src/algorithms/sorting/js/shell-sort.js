export default function shellSort(originalArray){

  // 원본 변경 방지
  const arr = [...originalArray];

  let gap = Math.floor(arr.length / 2);

  while (gap > 0){
 
    // gap이 짝수인 경우 홀수로 만들어 줌.
    // gap = gap % 2 ? gap : gap + 1;

    for(let i = gap; i < arr.length; i++ ){
      let j;
      let temp = arr[i];

      for(j = i; j >= gap && arr[j - gap] > temp; j -= gap){
        arr[j] = arr[j - gap];
      }

      arr[j] = temp;
    }

    gap = Math.floor(gap / 2)
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

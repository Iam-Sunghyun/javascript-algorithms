 
function shellSort(arr,n){

  let i, gap, temp;
  let j; 
  for (gap = Math.floor(n/2); gap > 0; gap = Math.floor(gap/2)){

    // gap이 짝수인 경우 +1
    if (gap % 2 === 0) gap++;
    for(i = gap; i < n; i++ ){

      temp = arr[i];
      for(j = i; j >= gap && arr[j - gap] > temp; j -= gap)
        arr[j] = arr[j - gap];

      arr[j] = temp;
    }
  }
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
shellSort(arr, n);
let endTime = new Date().getTime();

console.log("Sorted array: ");
printArray(arr, n);
// 수행 시간 측정 (s) 1000개 이상은 되어야 측정되기 시작함
console.log((endTime-startTime) / 1000);



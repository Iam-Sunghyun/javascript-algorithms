function mergeSort2(arr){

  if(arr.length > 1){

    let middle = Math.floor(arr.length / 2);

    let left = arr.slice(0,middle);
    let right = arr.slice(middle,arr.length);

    mergeSort2(left);
    mergeSort2(right);

    i = j = k = 0;

    while (i < left.length && j < right.length ){
      if(left[i] <= right[j]){
          arr[k] = left[i];
          i++;
      }else{
          arr[k] = right[j];
          j++;
      }
      k++
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
mergeSort2(arr, n);
let endTime = new Date().getTime();

console.log("Sorted array: ");
printArray(arr, n);
// 수행 시간 측정 (s) 1000개 이상은 되어야 측정되기 시작함
console.log((endTime-startTime) / 1000);
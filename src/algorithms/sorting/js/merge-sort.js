let mergeSort = function(array) {
  if (array.length < 2) return array; // 원소가 하나일 때는 그대로 return

  let middle = Math.floor(array.length / 2); // 중간 값
  // slice()로 새로운 배열 생성 - 원본 영향 no
  let left = array.slice(0, middle); // 0 ~ middle(middle 미포함) 
  let right = array.slice(middle, array.length); // middle ~ 마지막 요소

  return merge(mergeSort(left), mergeSort(right)); 
}

function merge(left, right) {

  let result = [];
  while (left.length && right.length) {
    if (left[0] <= right[0]) { // 두 배열의 첫 원소를 비교하여
      // shift() -> 배열의 첫 요소를 꺼내옴 (배열 안에선 삭제 됨)
      result.push(left.shift()); // 더 작은 수를 결과에 넣어줍니다.
    } else {
      result.push(right.shift()); 
    }
  }
  while (left.length) result.push(left.shift()); // 어느 한 배열이 더 많이 남았다면 나머지를 다 넣어줍니다.
  while (right.length) result.push(right.shift()); 
  return result;
};

function printArray(arr, n) 
{ 
    let i; 
    for (i = 0; i < n; i++) 
      process.stdout.write(`${arr[i]}`+ ` `); 
    console.log(" \n");
} 
   
// 난수 생성 후 테스트
let arr = [];
for (i = 0; i < 15; i++)
  arr.push(Math.floor(Math.random() * 100));

let n = arr.length;
console.log("UnSorted array: \n");
printArray(arr, n);

result = mergeSort(arr);
console.log("Sorted array: \n");
printArray(result, n);


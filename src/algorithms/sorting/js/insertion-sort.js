export default function insertionSort(originalArray) { 

  // 원본 보존
  const arr = [...originalArray];

  for (let i = 1; i < arr.length; i++){ 
    let key = arr[i]; 
    let j = i - 1; 

    while (j >= 0 && arr[j] > key){ 
      arr[j + 1] = arr[j]; 
      j = j - 1; 
    } 

    arr[j + 1] = key; 
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
 
const sorted = insertionSort(arr);
console.log("Sorted array: ");
console.log(sorted);

insertionSort(arr, n);
document.write("Sorted array: \n");
printArray(arr, n);

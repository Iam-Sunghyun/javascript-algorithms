function insertionSort(arr, n) 
{ 
    let i, key, j; 
    for (i = 1; i < n; i++)
    { 
        key = arr[i]; 
        j = i - 1; 
        while (j >= 0 && arr[j] > key)
        { 
            arr[j + 1] = arr[j]; 
            j = j - 1; 
        } 
        arr[j + 1] = key; 
    } 
} 
   
function printArray(arr, n) 
{ 
    let i; 
    for (i = 0; i < n; i++) 
        document.write(arr[i] + " "); 
    document.write("<br>");
} 
   
// 난수 생성 후 
let arr = [];
for (i = 0; i < 15; i++)
  arr.push(Math.floor(Math.random() * 100));

let n = arr.length;
document.write("UnSorted array: \n");
printArray(arr, n);

insertionSort(arr, n);
document.write("Sorted array: \n");
printArray(arr, n);

     

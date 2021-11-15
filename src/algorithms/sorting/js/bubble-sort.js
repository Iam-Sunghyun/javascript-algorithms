function swap(arr, a, b)
{
  /* let temp = arr[a];
     arr[a] = arr[b];
     arr[b] = temp;   */
  [arr[a],arr[b]] = [arr[b],arr[a]];                  
}
 
function bubbleSort( arr, n)
{
let i, j, changed;
for (i = 0; i < n-1; i++)
{
    changed = false;
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
        changed = true;
        }     
    }
    if(!changed) break;
}
}
 
function printArray(arr, size)
{
    let i;
    for (i=0; i < size; i++)
        document.write(arr[i]+ " ");
    document.write(" <br>");
}
 
// 난수 배열 생성 후 테스트
    let arr = [];
    for (i = 0; i < 15; i++)
      arr.push(Math.floor(Math.random() * 100));

    let n = arr.length;
    document.write("UnSorted array: \n");
    printArray(arr, n);
 
    bubbleSort(arr, n);
    document.write("Sorted array: \n");
    printArray(arr, n);
 
 

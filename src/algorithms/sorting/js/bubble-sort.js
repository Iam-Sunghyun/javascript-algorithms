function swap(arr, xp, yp)
{
  /* var temp = arr[xp];
     arr[xp] = arr[yp];
     arr[yp] = temp;   */
   [arr[xp],arr[yp]] = [arr[yp],arr[xp]];                  
}
 
// An optimized version of Bubble Sort
function bubbleSort( arr, n)
{
var i, j;
for (i = 0; i < n-1; i++)
{
    for (j = 0; j < n-i-1; j++)
    {
        if (arr[j] > arr[j+1])
        {
        swap(arr,j,j+1);
         
        }
    }
}
}
 
/* Function to print an array */
function printArray(arr, size)
{
    var i;
    for (i=0; i < size; i++)
        document.write(arr[i]+ " ");
    document.write("\n");
}
 
// Driver program to test above functions
    let arr = [];
    for (i = 0; i < 15; i++)
      arr.push(Math.floor(Math.random() * 100));

    let n = arr.length;
    document.write("UnSorted array: \n");
    printArray(arr, n);
 
    bubbleSort(arr, n);
    document.write("Sorted array: \n");
    printArray(arr, n);
 
 


function swap(arr,a,b){

  /* let tmp = arr[a]
     arr[a] = arr[b]
     arr[b] = tmp  */
  [arr[a],arr[b]] = [arr[b],arr[a]]

}

function selectionSort(arr,n){

  let i ,j, minIndex;

  for(i = 0; i < n-1; i++){

    minIndex = i
    for(j = i + 1; j < n; j++){
      if(arr[minIndex] > arr[j])
        minIndex = j;
    }
    swap(arr,minIndex,i);
  }
}

function printArray( arr,  size)
{
    let i;
    for (i = 0; i < size; i++)
        document.write(arr[i] + " ");
    document.write(" <br>");
}


let arr = [];
for (i = 0; i < 15; i++)
  arr.push(Math.floor(Math.random() * 100));

let n = arr.length;
document.write("UnSorted array: \n");
printArray(arr, n);

selectionSort(arr, n);
document.write("Sorted array: \n");
printArray(arr, n);

     
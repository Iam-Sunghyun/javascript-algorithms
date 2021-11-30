function swap(arr,a,b) {
    const temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp;
}

function quickSort(arr,start,end) {
  if(end <= start)return;
    let pivot = start;
    let left = start + 1;
    let right = end;

    while(right >= left){
      
      while(left <= end && arr[left] <= arr[pivot]){
        left++;
      }
      while(right > start && arr[right] >= arr[pivot]){
        right--;
      }
      if(left > right){
        swap(arr,pivot,right);
      }else{
        swap(arr,left,right);
      }
    }
    quickSort(arr,start,right-1);
    quickSort(arr,left,end);
}

let arr = [];
for (let i = 0; i < 10; i++)
  arr.push(Math.floor(Math.random() * 100));

console.log(arr);
quickSort(arr,0,arr.length-1);
console.log(arr);

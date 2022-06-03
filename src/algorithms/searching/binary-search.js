// recursion
function binarySearch(arr,low,high,key) {
  
  if(low >= high) return 'no key value';

  mid = Math.floor((high + low)/2);
  if(key === arr[mid])
    return 'key index is ' + mid;
  if(key > arr[mid])
    binarySearch(arr,mid+1,high,key);
  if(key < arr[mid])
    binarySearch(arr,low,mid-1,key);

}

// loop
function binarySearch2(arr,key) {
  
  let start = 0;
  let end = arr.length-1;
  while(end >= start){
    const mid = Math.floor((start + end)/2);
    if(arr[mid] === key)
      return 'key index is ' + mid;
    if(arr[mid] > key)
      start = mid + 1;
    if(arr[mid] < key)
      end = mid - 1;
  }
  return 'no key value';
}

arr = [1,2,3,4,5,6,7,8,9];

console.log(binarySearch(arr,0,arr.length,5));
console.log(binarySearch2(arr,5));
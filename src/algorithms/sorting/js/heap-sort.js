// 최대 바이너리 힙으로 하였음
class MaxHeap{

  constructor(){
    this.maxheap = [null];
  }

  swap(a,b){
    let tmp = this.maxheap[a];
    this.maxheap[a] = this.maxheap[b];
    this.maxheap[b] = tmp;
  }

  parentIndex(i){
    return Math.floor(i/2);
  }

  leftChildIndex(i){
    return Math.floor(i*2);
  }
  
  rightChildIndex(i){
    return Math.floor(i*2) + 1;
  }

  printArray(){
    for(let i = 1; i < this.maxheap.length; i++)
      process.stdout.write(`${this.maxheap[i]} `);
    console.log("");
  }

  insert(node){
   
    this.maxheap.push(node);         // 말단에 새 노드 삽입
    let currentIndex = this.maxheap.length - 1;     // 새 노드 인덱스

    // 업 힙(up-heap)
    while(currentIndex > 1){         // 부모 노드가 루트 노드 일 때까지 
      if (this.maxheap[currentIndex] > this.maxheap[this.parentIndex(currentIndex)] && this.parentIndex(currentIndex) >= 1){
        this.swap(this.parentIndex(currentIndex) , currentIndex);
        currentIndex = this.parentIndex(currentIndex);
      }else break;

    }
  }

  delete(){
    let currentIndex = this.maxheap.length - 1; 
    if (this.maxheap.length <= 0) return;

    this.swap(1,currentIndex);
    let maxValue = this.maxheap.pop();
    //console.log(`최대 값 = ${maxValue}`);
    this.maxHeapify(1);   
    return maxValue;
  }
  
  // 다운 힙(down-heap)
  maxHeapify(i){  
    let leftChild = this.rightChildIndex(i);
    let rightChild = this.leftChildIndex(i);
    let maxIndex = i;

    if (leftChild <= this.maxheap.length - 1 && this.maxheap[leftChild] > this.maxheap[maxIndex] )
      maxIndex = leftChild;
    if (rightChild <= this.maxheap.length - 1 && this.maxheap[rightChild] > this.maxheap[maxIndex] )
      maxIndex = rightChild;
      
    if (maxIndex !== i){
      this.swap(i,maxIndex);
      this.maxHeapify(maxIndex);
    }
  }

}
// 힙에서 추가 부분
function printArray(arr)
{
    let n = arr.length;
        for (let i = 0; i < n; ++i)
          process.stdout.write(`${arr[i]}`+ ` `); //nodejs에서 콘솔창에 줄 바꿈 없이 출력하는 법 
        console.log("\n");
}

let maxheap = new MaxHeap();

let arr = [];
for (i = 0; i < 10; i++)
  arr.push(Math.floor(Math.random() * 100));

let n = arr.length;
console.log("UnSorted array: ");
printArray(arr)

for(let i = 0; i < arr.length; i++)
  maxheap.insert(arr[i]);

for(let i = arr.length - 1; i >= 0; i--)
  arr[i] = maxheap.delete();

console.log("Sorted array: ");
printArray(arr)

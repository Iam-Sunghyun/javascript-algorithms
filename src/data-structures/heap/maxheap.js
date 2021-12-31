// 루트 노드 arr[1]부터 시작하는 바이너리 힙
class MaxHeap{

  constructor(){
    this.maxheap = [null];  // 0번은 사용하지 않음.
  }

  swap(a,b){
    let tmp = this.maxheap[a];
    this.maxheap[a] = this.maxheap[b];
    this.maxheap[b] = tmp;
  }

  parent(i){
    return Math.floor(i/2);
  }

  leftChild(i){
    return Math.floor(i*2);
  }
  
  rightChild(i){
    return Math.floor(i*2) + 1;
  }

  printArray(){
    for(let i = 1; i < this.maxheap.length; i++)
      process.stdout.write(`${this.maxheap[i]} `);
    console.log("");
  }

  insert(node){
   
    this.maxheap.push(node);         // 말단에 새 노드 삽입
    let current = this.maxheap.length - 1;     // 새 노드 인덱스

    // 업 힙(up-heap)
    while(current > 1){         // 부모 노드가 루트 노드 일 때까지 
      if (this.maxheap[current] > this.maxheap[this.parent(current)] && this.parent(current) >= 1){
        this.swap(this.parent(current) , current);                    // ↑ 이건 while문 조건이 currentIndex > 1이라 없어도 될 듯.
        current = this.parent(current);
      }else break;

    }
  }

  delete(){
    let current = this.maxheap.length - 1; 
    if (this.maxheap.length <= 1) return;

    this.swap(1,current);
    let maxValue = this.maxheap.pop();
    console.log(`최대 값 = ${maxValue}`);
    this.maxHeapify(1);   
    return maxValue;
  }
  
  // 다운 힙(down-heap)
  maxHeapify(i){  
    let leftChild = this.rightChild(i);
    let rightChild = this.leftChild(i);
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

let maxheap = new MaxHeap();

maxheap.insert(2);
maxheap.insert(5);
maxheap.insert(4);
maxheap.insert(8);
maxheap.insert(9);
maxheap.insert(3);
maxheap.insert(7);
maxheap.insert(3);

maxheap.printArray();
maxheap.delete();
maxheap.printArray();

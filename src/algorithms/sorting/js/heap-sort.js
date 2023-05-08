// 최대 바이너리 힙으로 하였음
class MaxHeap {

  constructor() {
    this.maxheap = [null];
  }

  swap(a, b) {
    const tmp = this.maxheap[a];
    this.maxheap[a] = this.maxheap[b];
    this.maxheap[b] = tmp;
  }

  parentIndex(i) {
    return Math.floor(i / 2);
  }

  leftChildIndex(i) {
    return Math.floor(i * 2);
  }

  rightChildIndex(i) {
    return Math.floor(i * 2) + 1;
  }

  printArray() {
    for (let i = 1; i < this.maxheap.length; i++)
      process.stdout.write(`${this.maxheap[i]} `);
    console.log("");
  }

  insert(node) {

    this.maxheap.push(node);         // 말단에 새 노드 삽입
    let currentIndex = this.maxheap.length - 1;     // 새 노드 인덱스

    // 업 힙(up-heap)
    while (currentIndex > 1) {         // 부모 노드가 루트 노드 일 때까지 
      if (this.maxheap[currentIndex] > this.maxheap[this.parentIndex(currentIndex)] && this.parentIndex(currentIndex) >= 1) {
        this.swap(this.parentIndex(currentIndex), currentIndex);
        currentIndex = this.parentIndex(currentIndex);
      } else break;

    }
  }

  delete() {
    const currentIndex = this.maxheap.length - 1;
    if (this.maxheap.length <= 0) return;

    this.swap(1, currentIndex);
    const maxValue = this.maxheap.pop();

    this.maxHeapify(1);
    return maxValue;
  }

  // 다운 힙(down-heap)
  maxHeapify(i) {
    const leftChild = this.rightChildIndex(i);
    const rightChild = this.leftChildIndex(i);
    let maxIndex = i;

    if (leftChild <= this.maxheap.length - 1 && this.maxheap[leftChild] > this.maxheap[maxIndex])
      maxIndex = leftChild;
    if (rightChild <= this.maxheap.length - 1 && this.maxheap[rightChild] > this.maxheap[maxIndex])
      maxIndex = rightChild;

    if (maxIndex !== i) {
      this.swap(i, maxIndex);
      this.maxHeapify(maxIndex);
    }
  }

}

// 힙 객체 생성
const maxheap = new MaxHeap();

// 난수 배열 생성
const randomList = [];
for (let i = 0; i < 10; i++) {
  randomList.push(Math.floor(Math.random() * 100));
}
console.log("UnSorted array: ");
console.log(arr.join(' '))

// 난수 배열 요소 힙에 삽입
for (let i = 0; i < arr.length; i++) {
  maxheap.insert(randomList[i]);
}

// 힙 요소 하나씩 삭제하면서 새 배열에 삽입
const sortedList = []
for (let i = arr.length - 1; i >= 0; i--) {
  arr[i] = maxheap.delete();
}

console.log("Sorted array: ");
printArray(arr);

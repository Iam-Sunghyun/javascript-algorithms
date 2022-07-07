# 힙 (heap)

힙(heap)은 **완전 이진 트리의 일종**으로 **우선순위 큐를 위해 만들어진 자료구조**로
**반 정렬 상태**(느슨한 정렬 상태)를 유지한다. 

+ 큰 값이 상위 레벨에 있고 작은 값이 하위 레벨에 있다.
   + 즉 **부모 노드의 키 값이 자식 노드의 키 값보다 항상 크거나 작은 이진트리**를 말함
+ **최대값, 최소값을 빠르게 찾아내도록 만들어진 자료구조**
   + 힙의 목적이 삭제 연산에서 가장 큰 값(혹은 작은 값)을 효율적으로 찾아내기만 하며 되는것이므로 전체를 정렬할 이유는 없다.
+ 이진 탐색 트리와는 달리 힙 트리에선 **중복된 값을 허용**한다.
+ 인덱스 연산을 간단하게 하기 위해 루트 노드를 Arr[1] 로 둔다.


# 힙 (heap) 종류  

## 최대 힙(max heap)
+ 부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같은 완전 이진트리.
+ 루트 노드는 **최대 값**을 갖는다.

## 최소 힙(min heap)
+ 부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진트리.
+ 루트 노드는 **최소 값**을 갖는다.

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/heap/img/MinHeapAndMaxHeap.png" width="600" height="350">    


# 힙의 표현
힙은 완전 이진 트리이기 때문에 노드 중간에 비어 있는 요소가 없다. 힙을 저장하는 효과적인 자료구조는 **배열**이다 .
  + 완전 이진 트리이기 때문에 노드 중간에 비어 있는 요소가 없다.
  + 따라서 배열을 이용하여 힙을 표현하면 자식과 부모 노드의 위치(인덱스)를 쉽게 계산할 수 있다.
  
## 노드 표현
+ **루트 노드가 Arr[0]에 위치한 경우** Arr[i]에 대한 부모/자식 노드 위치 
```
부모 노드 = Arr[(i-1)//2]	
왼쪽 자식 노드 = Arr[(2*i)+1]   
오른쪽 자식 노드 = Arr[(2*i)+2]
```
+ 표현을 간단하게 하기 위해 **루트 노드를 Arr[1]에 놓는 경우** (0번 인덱스 비우고 1부터 시작)
```
부모 노드 = Arr[(i//2)]	
왼쪽 자식 노드 = Arr[(2*i)]   
오른쪽 자식 노드 = Arr[(2*i)+1]
```

# 힙의 연산 
다음은 **최대 힙**이면서 **루트 노드가 Arr[1]** 부터 시작할 경우(0 비움) 예시이다.

## 삽입
1. 새로운 노드를 힙의 마지막 위치에(마지막 노드 +1) 삽입 한다.
2. **부모 노드들과 교환**해서 힙의 성질을 만족시켜주는 과정이 필요하다. -> **업-힙(up-heap)** 이라고 한다
   + 부모 노드와 크기를 비교해서 새로운 노드가 더 큰 경우 부모 노드 위치와 교환.
   + 부모 노드가 더 크거나, 더 이상 비교 할 노드가 없을 때까지 반복.
```
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
```
## 삭제
1. 루트 노드를 삭제한다.
2. 제일 말단의 노드를 루트 노드로 옮긴 다음 **자식 노드와 비교**하여 순차적으로 강등시킨다 -> **다운 힙(down-heap)** 이라고 한다.
   + 자식 노드와 크기를 비교해서 **값이 가장 큰 자식노드와 교환** 한다(그래야 한번에 정렬 됨).
   + 다음 트리에서 재귀적으로 반복한다.
```
 delete(){
    let currentIndex = this.maxheap.length - 1; 
    if (this.maxheap.length <= 0) return;

    this.swap(1,currentIndex);
    let maxValue = this.maxheap.pop();
    console.log(`최대 값 = ${maxValue}`);
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
```


## 힙 연산 시간 복잡도

+ 삽입 시 최악의 경우 힙 트리를 타고 올라가면서 루트 노드 까지 올라가야 하므로 트리 높이에 해당하는 비교 및 이동이 필요하다. 힙이 완전 이진 트리인 것을 생각하면 높이가 logN+1(밑2)이 되어 O(logN)이 된다.

+ 삭제의 경우도 마찬가지로 맨 마지막 노드를 루트로 가져온 뒤 자식 노드들과 비교하며 다운 힙을 거치는데, 최악의 경우 가장 밑 레벨까지 이동해야 하므로 O(logN)이 된다.

구성|삽입|삭제|
:---:|:---:|:---:|
O(nlogn)|O(logn)|O(logn)|

## Reference

https://daimhada.tistory.com/108
https://www.geeksforgeeks.org/heap-data-structure/

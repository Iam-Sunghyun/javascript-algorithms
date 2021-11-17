# datastructure
 
 # 힙 (heap)

+ 힙(heap)은 **완전 이진 트리의 일종**으로 우선순위 큐를 위해 만들어진 자료구조
+ 일종의 **반 정렬 상태**(느슨한 정렬 상태)를 유지한다 
   + 큰 값이 상위 레벨에 있고 작은 값이 하위 레벨에 있다
   + 즉 **부모 노드의 키 값이 자식 노드의 키 값보다 항상 크거나 작은 이진트리**를 말함
+ **최대값, 최소값**을 빠르게 찾아내도록 만들어진 자료구조
   + 힙의 목적이 삭제 연산에서 가장 큰 값(혹은 작은 값)을 효율적으로 찾아내기만 하며 되는것이므로 전체를 정렬할 이유는 없다
+ 이진 탐색 트리와는 달리 힙 트리에선 **중복된 값을 허용**한다
+ **표현을 간단하게 하기 위해 루트 노드를 Arr[1]** 로 둔다. (안 그런 경우도 있음)


## 힙 (heap) 종류  

### 최대 힙(max heap)
+ 부모 노드의 키 값이 자식 노드의 키 값보다 크거나 같은 완전 이진트리
   + 루트 노드는 **최대 값**을 갖는다

### 최소 힙(min heap)
+ 부모 노드의 키 값이 자식 노드의 키 값보다 작거나 같은 완전 이진트리
   + 루트 노드는 **최소 값**을 갖는다

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/heap/img/MinHeapAndMaxHeap.png" width="600" height="350">    
출처:https://www.geeksforgeeks.org/heap-data-structure/


## 힙의 표현
+ 힙을 저장하는 효과적인 자료구조는 **배열**이다 
    + 완전 이진 트리이기 때문에 노드 중간에 비어 있는 요소가 없다
    + 따라서 배열을 이용하여 힙을 표현하면 자식과 부모 노드의 위치(인덱스)를 쉽게 계산할 수 있다
### 노드 표현
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

## 힙의 연산 
**최대 힙**의 경우, **루트 노드가 Arr[1]** 부터 시작할 때(0 비움) 예시

### 삽입
1. 새로운 노드를 힙의 마지막 위치에(마지막 노드 +1) 삽입 한다
2. **부모 노드들과 교환**해서 힙의 성질을 만족시켜주는 과정이 필요하다 -> **업-힙(up-heap)** 이라고 한다
   + 부모 노드와 크기를 비교해서 새로운 노드가 더 큰 경우 부모 노드 위치와 교환
   + 부모 노드가 더 크거나, 더 이상 비교 할 노드가 없을 때까지 반복
```
def insert(self,n):
    self.queue.append(n)
    i = len(self.queue) - 1  # 삽입 노드 위치 인덱스
   
    while i > 1: 
      # 부모 노드 루트 노드일 때까지 비교
      if self.queue[i//2] < self.queue[i] and 1 <= i//2: 
        self.queue[i//2], self.queue[i] = self.queue[i], self.queue[i//2]
      # 부모 노드의 인덱스도 교환
        i =  i//2    
      else: break
```
### 삭제
1. 루트 노드를 삭제한다
2. 제일 말단의 노드를 루트 노드로 옮긴 다음 **자식 노드와 비교**하여 순차적으로 강등시킨다 -> **다운 힙(down-heap)** 이라고 한다
   + 자식 노드와 크기를 비교해서 **값이 더 큰 자식노드와 교환** 한다 (그래야 한번에 정렬 됨)
   + 다음 트리에서 재귀적으로 반복한다
```
  # 힙에서 삭제 연산? -> 루트 노드 삭제
  def delete(self):
      i = len(self.queue) - 1
      if i <= 0 : # 힙에 아무 값도 없을 경우
        return -1
      self.queue[1] , self.queue[i] = self.queue[i] , self.queue[1]
      max = self.queue.pop()
      print(max)
      self.max_heapify(1) # 힙 트리 성질에 맞게 재 정렬
      return max


  def max_heapify(self,i):
    left = i * 2
    right = (i * 2) + 1
    max_index = i # 루트노드가 최대 값이라고 가정 후 스타트

    # 자식 노드들이 트리 범위 내에 있는지, 있다면 부모 노드 보다 큰 자식 노드 인덱스 를 max_index에 넣어줌
    if left <= len(self.queue) - 1 and self.queue[max_index] < self.queue[left]:
      max_index = left
    if right <= len(self.queue) - 1 and self.queue[max_index] < self.queue[right]:
      max_index = right
    
    # 자식 노드와 인덱스 교환이 일어났을 경우 값도 교환해주고 그 밑 트리에 대해서도 재귀적으로 실행
    if max_index != i:
      self.queue[i], self.queue[max_index] = self.queue[max_index], self.queue[i]
      self.max_heapify(max_index)
```

## 힙 전체 코드 (python)

[파일참조](https://github.com/Iam-Sunghyun/datastructure/blob/main/MaxHeap)


+ 파이썬은 heapq 내장 모듈로 최소 힙(min heap)을 지원 함.


### 힙 정렬 분석


### 힙 연산 시간 복잡도

+ 삽입 : O(logn)
+ 삭제 : O(logn)  

### 참고자료

https://daimhada.tistory.com/108

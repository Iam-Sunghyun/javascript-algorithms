
# datastructure
 
 # 해시 테이블 (hash table)

+ 


## 힙 (heap) 종류  


<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/heap/img/MinHeapAndMaxHeap.png" width="600" height="350">    


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
1.
```

```
### 삭제
1. 
```
 
```


### 힙 연산 시간 복잡도

삽입|삭제|
:---:|:---:|
O(logn)|O(logn)|

## Reference


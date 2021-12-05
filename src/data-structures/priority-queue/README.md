# 우선순위 큐(priority queue)

+ 보통의 큐처럼 먼저 들어온 데이터가 먼저 나가는 게(FIFO) 아닌 **우선순위가 높은 데이터가 먼저 출력되는 구조**이다.
+ 배열, 연결 리스트 등 여러 가지 방법으로 구현이 가능하지만 가장 효율적인 자료구조는 **힙(heap)** 이다!


## 배열로 구현
### 정렬되지 않은 배열
[우선순위 큐-배열1](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/priority-queue/priority-queue1.js)
+ 삽입은 매우 간단하다 -> 맨 뒤에 삽입하기만 하면 된다. O(1)
+ 삭제의 경우 가장 우선순위가 높은 요소를 삭제하기 위해 매번 배열을 스캔해줘야 한다. O(n)
   + 추가로 맨 앞 요소 삭제 후 다른 요소들을 당겨줘야 한다.

|삽입|삭제|
|:---:|:---:|
|O(1)|O(n)|

### 정렬된 배열
[우선순위 큐-배열2](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/priority-queue/priority-queue2.js)
+ 간단한 삭제, 하지만 삽입 시 데이터를 우선순위에 맞게 정렬해줘야 함.

|삽입|삭제|
|:---:|:---:|
|O(n)|O(1)|

## 연결리스트로 구현
### 정렬되지 않은 연결리스트
[우선순위 큐-연결 리스트1](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/priority-queue/priority-queue3.js)
+ 맨 앞에 요소를 삽입하는 것으로 간단하게 삽입.
+ 삭제 시에는 모든 노드를 방문하여 우선순위를 체크해줘야 한다.

|삽입|삭제| 
|:---:|:---:|
|O(1)|O(n)|

### 정렬된 연결리스트
[우선순위 큐-연결 리스트2]()
+ 우선순위가 가장 높은 것을 맨 앞에 두어 간단히 삭제.
+ 삽입 시 우선순위를 비교하여 이동해줘야 한다.

|삽입|삭제|
|:---:|:---:|
|O(n)|O(1)|


## 힙(heap)으로 구현
[힙(heap)](https://github.com/Iam-Sunghyun/javascript-algorithms/tree/main/src/data-structures/heap) 참조

|삽입|삭제|
|:---:|:---:|
|O(logn)|O(logn)|

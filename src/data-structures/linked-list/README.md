# 연결 리스트(linked list)

+ 물리적으로 흩어져 있는 자료들을 서로 연결하여 묶는 방법.
+ 연결 리스트에서 각 요소를 의미하는 **노드(node)** 는 **데이터**와 **링크**로 구성되어 있다.
   + 데이터는 데이터를 저장하고, 링크는 다음 노드의 **참조(주소) 값** 즉, 링크 필드를 갖는다.
+ 종류로는 다음과 같이 3가지가 있다.
   + **단순 연결 리스트(singly linked list)** - 한 방향으로만 연결, 마지막 노드의 링크 값은 null로 둔다.
   + **이중 연결 리스트(doubly linked list)** - 각 노드마다 링크 필드가 2개 즉, 앞/뒤 노드의 참조 값을 갖는다.
   + **원형 연결 리스트(circular linked list)** - 맨 마지막 노드가 맨 앞 노드를 가리킨다.
+ 연결 리스트는 첫 번째 노드를 알아야 링크로 연결된 나머지 노드들에 접근 할 수 있다.
+ 따라서 첫 번째 노드의 주소를 반드시 저장해야 되는데 이 것을 **헤드 포인터(head pointer)** 라고 한다.

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/linked-list/img/linked-list.png" width="550" height="250"> 

## 연결 리스트(linked list) 구현

[**단순 연결리스트**](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/linked-list/linked-list.js) 참조 <br>
[**이중 연결리스트**](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/linked-list/doubley-linked-list.js) 참조 <br>
[**원형 연결리스트**](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/linked-list/circular-linked-list.js) 참조 

## 연결 리스트 장/단점

### 장점
+ 크기가 고정되지 않는다. (자바스크립트의 경우 일반 배열도 크기가 동적이기 때문에 큰 차이는 없다)
+ 중간에 데이터를 **삽입/삭제 하기 용이**하다.
   + 배열의 경우 중간에 값을 삭제/삽입하면 나머지 요소들을 이동시켜줘야 한다.
   + 연결 리스트는 노드 A와 B사이에 N을 삽입한다고 가정했을 때, A가 N을 가리키고, N이 B를 가리키게만 바꿔주면 된다. 
### 단점
+ 배열에 비해 상대적으로 구현이 까다롭고, 링크 필드로 인한 추가 메모리가 소요 된다.
+ 특정 데이터를 검색 시 맨 앞 노드부터 순차적으로 접근(Sequential Access)하기 때문에 최대 O(n)의 시간 복잡도가 소요 된다. (배열은 Random Access)
+ 배열과 달리 데이터가 메모리상에서 물리적으로 흩어져 있기 때문에 캐싱에 불리하다.

## 연결 리스트 복잡도

접근|검색|삽입|삭제|메모리|비고
:---:|:---:|:---:|:---:|:---:|:---:|
O(n)|O(n)|O(1)~O(n)|O(1)~O(n)|O(n)|삽입,삭제 연산 자체는 O(1)이나, 특정 위치에 접근 하는 비용까지 고려하면 O(n)|

## Reference

https://github.com/trekhleb/javascript-algorithms/tree/9bb60fa72f9d146e931b4634764dff7aebc7c1a2/src/data-structures/linked-list
https://velog.io/@kimkevin90/Javascript%EB%A5%BC-%EC%9D%B4%EC%9A%A9%ED%95%9C-Linked-List-%EA%B5%AC%ED%98%84

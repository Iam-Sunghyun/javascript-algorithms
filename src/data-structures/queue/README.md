# 큐(Queue)

가장 먼저 들어온 데이터가 가장 먼저 나가는 **선입선출(FIFO: First-In First-Out)형태**의 자료구조로 일반적인 대기열을 생각하면 된다.
+ 삽입이 일어나는 부분을 **후단(rear)**, 삭제(출력)이 일어나는 부분을 **전단(front)** 이라고 한다!
+ 삽입 시 g의 인덱스를 +1 한 후 삽입해주고, 삭제 시 front의 인덱스 +1 한 위치의 값을 삭제한다.

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/queue/img/queue.png" width="450" height="250"> 

## 큐의 종류

큐의 종류는 아래와 같고 배열, 연결 리스트를 이용해 구현할 수 있다.

+ 선형 큐 - 가장 기본적인 선형의 큐.
+ 원형 큐 - 원형으로 이루어져 있다고 가정하여 구현한 큐. 
+ 우선 순위 큐(Priority queue) - 최대, 최소 값을 구하기 위한 자료구조로, 완전 이진 트리인 힙(Binary heap)을 이용해 구현한다.
+ 덱(Dequeue)

## 큐 연산/구현

+ **enqueue(data)** - 큐 후단에 데이터를 삽입
+ **dequeue()** - 큐 전단의 데이터를 제거(출력)
+ peek() - 전단의 데이터를 조회
+ isEmpty() - 큐가 비어있는지 확인
+ isFull() - 큐가 꽉 차있는지 확인
+ size() - 큐의 크기를 반환

## 배열로 구현한 선형 큐(Linear queue)

내장 메서드 없이 front, rear을 사용해서 구현 할 경우 삽입/삭제를 거듭하게 되면 front, rear는 계속 증가하여 언젠가 배열 끝에 도달하게 되어 값을 삽입할 수 없게 된다.
  
따라서 요소를 삭제할 때마다 한칸 씩 앞당겨 주거나, 큐에 공간이 있으면서 rear가 맨 뒤에 있는 경우 요소들을 이동시켜줘야 새로운 값을 삽입할 수 있게 되는데 매우 번거롭고 큐의 크기가 크면 클수록 요소 이동이 많아져 비효율적이다.

자바스크립트의 경우 front, rear을 둘 필요도 없이 배열 객체의 shift(), push()만으로 아주 간단하게 큐를 구현할 수 있다. 하지만 shift()로 요소 삭제 시 내부적으로 모든 요소가 옮겨지게 되는 것은 똑같다.

이러한 단점은 **원형 큐(Circular queue)** 를 구현하여 해결할 수 있다.
  

[선형 큐-배열](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/queue/queue.js) 참조 - 이 선형 큐는 front, rear없이 자바스크립트의 내장 메서드로 구현한 것이므로 위에서 말한 요소를 이동시켜줘야 하는 부분을 직접 구현할 필요는 없다.

### 선형 큐 장/단점

|||
|:---:|:---:|
|**장점**|구현이 간단하다.|
|**단점**|큐가 비어있으면서 rear이 맨 뒤를 가리킬 때 모든 요소를 앞당겨줘야 한다.|

<br>

## 원형 큐(Circular queue)

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/queue/img/circular-queue.png" width="450" height="300"> 

1차원 배열이지만 원형으로 연결되어 있다고 가정하여 구현한 큐로 선형 큐의 문제점을 개선한 버전이다.

원형 큐에서는 front, rear의 시작 위치가 어디든 상관 없다(동일하기만 하면).

포화, 공백 상태를 구분하기 위해 한 자리는 반드시 비워둬야 한다. 그렇지 않으면 아래(a), (b)그림처럼 포화 상태와 공백 상태 모두 front === rear로 구분할 수 없게 된다.

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/queue/img/circular-queue-error.png" width="500" height="200"> 

+ 데이터 삽입, 삭제에 따른 front, rear의 인덱스와 요소 개수 계산식은 다음과 같다.
   + front = (front + 1) % 큐의 크기
   + rear = (rear + 1) % 큐의 크기 
   + size = (rear-front + 큐의 크기) % 큐의 크기
   
[큐-원형 큐](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/queue/queue-circular.js) 참조

|||
|:---:|:---:|
|**장점**|선형 큐에서 요소를 이동시켜줘야 했던 문제가 없다.|
|**단점**|큐의 크기가 한정되어 있다.|

<br>

## 연결 리스트로 구현한 큐

말 그대로 선형 큐를 연결 리스트를 이용해 구현 한 것.

크기가 한정돼있지 않고 선형 큐에서 있었던 요소를 이동시켜줘야하는 문제도 없다.
    
[큐-연결리스트](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/queue/queue-linked-list.js) 참조

## 큐(queue)의 활용

큐는 매우 광범위한 부분에서 사용된다.
+ 컴퓨터 장치끼리 데이터를 주고 받을 때 발생하는 속도, 시간차를 극복하기 위한 임시 기억 장치인 **버퍼(buffer)** 에 사용 된다.
+ 실시간 스트리밍에도 데이터를 충분히 모아서 전송하기 위해 큐를 사용한다.
+ 프린터의 출력 처리나 윈도 시스템의 메시지 처리기, 프로세스 관리 등 데이터가 입력된 시간 순서대로 처리해야 할 필요가 있는 상황에도 이용된다.
+ 너비 우선 탐색(Breadth first search)에서도 사용된다.
  

## Reference

https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue

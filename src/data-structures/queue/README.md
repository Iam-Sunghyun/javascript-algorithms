# 큐(queue)

+ 가장 먼저 들어온 데이터가 가장 먼저 나가는 **선입선출(FIFO: First-In First-Out)형태**의 자료구조.
+ 일반적인 대기열을 생각하면 된다.
+ 삽입이 일어나는 부분을 **후단(rear)**, 삭제(출력)이 일어나는 부분을 **전단(front)** 이라고 한다!
   + 삽입 시 rear의 인덱스를 +1 한 후 삽입해주고, 삭제 시 front의 인덱스 +1 한 위치의 값을 삭제한다.

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/queue/img/queue.png" width="450" height="250"> 

## 큐(queue) 연산/구현

+ **enqueue(data)**
+ **dequeue()**
+ peek()
+ isEmpty()
+ isFull()
+ size()

## 배열로 구현한 큐

[큐-배열](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/queue/queue.js) 참조 <br>

+ front, rear을 사용해서 구현 할 경우 삽입/삭제를 거듭하게 되면 front, rear는 계속 증가하여 언젠가 배열 끝에 도달하게 되어 값을 삽입 할 수 없게 된다. 그럴때마다 모든 요소들을 맨 앞까지 당겨줘야 하기 때문에 비효율적이다.
+ 자바스크립트의 경우 front, rear을 둘 필요도 없이 배열 객체의 shift(), push()만으로 아주 간단하게 큐를 구현할 수 있다. 하지만 삭제 시 내부적으로 모든 요소를 옮겨줘야 되는 것은 똑같다.
+ 이러한 단점은 **원형 큐(circular queue)** 를 구현하여 해결할 수 있다.

## 원형 큐(circular queue)

+ 원형 큐에서는 front, rear의 시작 위치가 어디든 상관 없다.(-1이 아니면서, 동일하기만 하면)
+ 포화, 공백 상태를 구분하기 위해 한 자리는 반드시 비워둬야 한다.
+ 데이터 삽입, 삭제에 따른 front, rear 인덱스 변화와, 요소 개수 계산 식은 다음과 같다.
   + front = (front + 1) % 큐의 크기
   + rear = (rear + 1) & 큐의 크기 
   + size = (rear-front + 큐의 크기) % 큐의 크기
   
[큐-원형 큐](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/queue/queue-circular.js) 참조

## 연결 리스트로 구현한 큐
  
[큐-연결리스트](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/queue/queue-linked-list.js) 참조
  
## 큐(queue)의 활용

+ 큐는 매우 광범위한 부분에서 사용된다.
+ 컴퓨터 장치끼리 데이터를 주고 받을 때 발생하는 속도, 시간차를 극복하기 위한 임시 기억 장치인 **버퍼(buffer)**에도 사용 된다.
   + 실시간 스트리밍에도 데이터를 충분히 모아서 전송하기 위해 큐를 사용한다.
+ 그 밖에 많은 대기열을 표현하는 데 큐가 사용된다!

## Reference

https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/queue

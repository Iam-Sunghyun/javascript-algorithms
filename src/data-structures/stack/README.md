<h2>목차</h2>

- [스택(stack)](#스택stack)
  - [배열을 이용한 구현](#배열을-이용한-구현)
  - [연결리스트를 이용한 구현](#연결리스트를-이용한-구현)
  - [스택의 활용](#스택의-활용)
  - [Reference](#reference)

# 스택(stack)

- 쌓여있는 접시 더미 형태의 데이터 구조
  - 새로운 접시는 맨 위에 쌓고, 사용 할 접시는 맨 위에 있는 것부터 사용한다!
  - 중간에 있는 것들을 사용할 수도 있지만 번거로운 작업이 필요할 것이다
- **후입선출(LIFO: Last-In First-Out)** 형태의 자료구조이다

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/stack/img/stack.png" width="550" height="350">

## 배열을 이용한 구현

[스택-배열1](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/stack/stack-built-in.js) 참조 <br>
[스택-배열2](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/stack/stack.js) 참조

## 연결리스트를 이용한 구현

- 연결 리스트의 구현을 대부분 가져와 사용한다.
  - 연결 리스트의 특성 상 isFull() 연산은 불필요하다!
- **top을 헤드 포인터**로 하여 데이터를 삽입할 때 마다 top에 값을 집어 넣는다.

[스택-연결리스트](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/stack/stack-linkedlist.js) 참조 <br>
<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/stack/img/stack-linkedlist.png" width="550" height="350">

## 스택의 활용

- 문서나 그림 툴 등 편집기(editor)에서 **되돌리기** 기능을 구현할 때 사용한다.
- 함수 호출에서 복귀주소를 기억하는데 사용한다.
  - 가장 늦게 호출 된 함수가 가장 먼저 실행을 완료하고 복귀한다.
- 괄호 닫기가 정상적으로 됐는지 검사하는 프로그램에서 사용된다!
- 미로에서 출구 찾기 위해서도 스택을 사용할 수 있다.

## Reference

https://github.com/trekhleb/javascript-algorithms/tree/master/src/data-structures/stack

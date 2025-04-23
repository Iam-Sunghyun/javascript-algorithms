<h2>목차</h2>

- [해시 테이블 (hash table)](#해시-테이블-hash-table)
- [해시 테이블 (hash table) 구조](#해시-테이블-hash-table-구조)
  - [충돌이 발생하면?](#충돌이-발생하면)
- [해시 함수 (hash function)](#해시-함수-hash-function)
  - [1. 제산 함수 (division method)](#1-제산-함수-division-method)
  - [2. 폴딩 함수 (digit folding method, 자릿수 접기)](#2-폴딩-함수-digit-folding-method-자릿수-접기)
    - [탐색키가 정수가 아닌 경우?](#탐색키가-정수가-아닌-경우)
- [충돌에 따른 오버플로 처리 방법](#충돌에-따른-오버플로-처리-방법)
  - [열린 주소법(Open Addressing Method, 개방 주소법)](#열린-주소법open-addressing-method-개방-주소법)
    - [1. 선형 조사법(linear probing, 선형 탐사법)](#1-선형-조사법linear-probing-선형-탐사법)
    - [선형 조사법(linear probing)에 의한 해시 구현](#선형-조사법linear-probing에-의한-해시-구현)
  - [닫힌 주소법(closed Addressing Method)](#닫힌-주소법closed-addressing-method)
    - [2. 체이닝(chainning, seperate channing)](#2-체이닝chainning-seperate-channing)
  - [해싱 장/단점](#해싱-장단점)
    - [장점](#장점)
    - [단점](#단점)
  - [해싱 복잡도](#해싱-복잡도)
  - [Reference](#reference)

# 해시 테이블 (hash table)

- **해시 테이블(hashtable)은** **키(Key)** 와 **값(Value)** 의 쌍으로 데이터를 저장하는 자료구조이다
  - 언어에 따라서 **HashMap**이라고도 불리며, 파이썬의 Dictionary 또한 HashTable로 구현되어 있다.
- 키 값에 산술적인 연산을 적용하여 값의 위치, 즉 값의 **주소**를 직접 계산하여 데이터를 찾는다 .
- 키 값으로부터 항목의 위치를 계산하는 함수를 **해시 함수(hash function)** 라 한다. (임의의 데이터를 고정 길이 데이터로 변환해주는 함수)
- 해시 함수에 의해 계산된 값을 **해시 값(hash value)** 이라 하고, 해시 값의 위치(주소)에 데이터를 저장한 표를 **해시 테이블(hash table)** 이라고 한다.
- 키를 해시 해시 값으로 매핑하는 과정을 **해싱(hashing)** 이라 한다.

# 해시 테이블 (hash table) 구조

- 해시 테이블은 M개의 **버킷(bucket)** 으로 이루어져있고, 하나의 버킷은 여러 개의 **슬롯(slot)** 을 가지는데 하나의 슬롯에 하나의 데이터가 저장 된다.
- 아래 그림은 **하나의 슬롯**을 가진 **16개의 버킷(0~15)** 으로 이루어진 해시 테이블이다.
  <img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/hash-table/img/hash-table1.png" width="450" height="350">

- 버킷의 수가 고정되어 있으므로 경우에 따라 서로 다른 키가 해시 함수에 의해 해시 값으로 매핑되는 상황이 발생하기도 하는데 이것을 **충돌(collision)** 이라고 한다.
  - 충돌을 일으키는 키들, 즉 동일한 해시 값을 발생시키는 키들을 **동의어(synonym)** 라 한다.

### 충돌이 발생하면?

- 만약 버킷에 여러 개의 슬롯이 있다면 데이터를 각각 다른 슬롯에 저장 하면 된다.
- 하지만 충돌이 슬롯 수보다 더 많이 발생할 수도 있는데 이런 상황을 **오버플로(overflow)** 라고 한다. 이런 경우 **해당 버킷에 더 이상 저장할 수 없게 된다.**
- **따라서 해싱에서는 오버플로를 해결하기 위한 방법이 반드시 필요하다!**

<br>

# 해시 함수 (hash function)

- 해싱에서는 **해시 함수의 설계가 매우 중요**하다.
- 좋은 해시 함수의 조건은 다음과 같다.
  - **충돌이 적어야 한다**.
  - 해시 값이 해시 테이블의 주소 영역 내에서 **고르게 분포** 되어야 한다.
  - 계산속도가 빨라야 한다.
- **아래 해시 함수들은 키가 '정수'라고 가정한 경우의 내용이다.**

## 1. 제산 함수 (division method)

- 가장 단순하고 일반적인 방법으로 나머지 연산자(%)를 이용하는 것이다.
- 입력 값이 얼마던, 테이블의 크기로 나눈 나머지는 테이블의 크기(M)을 넘지 않는다.

```
해시 값(주소) = 키 % 테이블의 크기(버킷 수)
```

- 이때, 가능 하면 해시 값을 더 고르게 분포시키기 위해 **해시 테이블의 크기(버킷 수) M**은 **소수(prime number)** 를 선택한다.
- 1과 자기 자신만을 약수로 가지는 수라면, 해시 값 연산(키 % 테이블 크기)의 결과는 **0 ~ 테이블 크기-1**까지 골고루 나오게 됨으로 해시 테이블 주소 영역 내에 고르게 분포하게 된다.

## 2. 폴딩 함수 (digit folding method, 자릿수 접기)

- 주로 키가 해시 테이블의 크기보다 더 큰 정수일 경우 사용된다.
- 탐색키를 여러 부분으로 나누어 모두 더한 값을 해시 주소로 사용한다.
- 이러한 방법에는 **이동 폴딩(shift folding)** 과 **경계 폴딩(boundary folding)** 이 대표적이다.
  - 이동 폴딩은 탐색키를 여러 부분으로 나누어 더하고, 경계 폴딩은 이웃한 부분을 거꾸로 더해 해시 값을 얻는다.

```
   키     = 12320324111220
이동 폴딩 = 123 + 203 + 241 + 112 + 20 = 699
경계 폴딩 = 123 + 302 + 241 + 211 + 20 = 897
                 (203)       (112)
```

### 탐색키가 정수가 아닌 경우?

- 탐색키가 문자열인 경우 보통 각 문자에 정수를 대응시켜 바꿔 사용한다.

```
// 입력 받은 키의 각 자리 문자를 유니 코드로 반환하여 더한 다음 나머지 연산 (제산 함수)
_hash(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    hash += key.charCodeAt(i);
  }
  return hash % this.table.length;
}
```

# 충돌에 따른 오버플로 처리 방법

## 열린 주소법(Open Addressing Method, 개방 주소법)

### 1. 선형 조사법(linear probing, 선형 탐사법)

- 충돌이 발생하면 해시 테이블의 다른 위치를 찾아 데이터를 저장한다.
- 해시 함수로 구한 버킷에 빈 슬롯이 없으면 그 다음 버킷에서 빈 슬롯이 있는지 조사(probing)한다.
  - 만약 ht[k]에서 충돌이 발생했다면, ht[k+1]부터 마지막 버킷까지 비어있는 곳을 조사한다.
  - 테이블의 끝에 도달하여 처음으로 돌아온다면 테이블이 가득 찬 상태이다.

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/hash-table/img/linear-probing.JPG" width="400" height="300">

- 위 그림을 보면 한번 충돌이 발생한 위치에서 데이터들이 집중되는 현상을 볼 수 있는데, 이것을 **군집화(clustering)** 라고 한다.
- 오버플로에 따른 군집화 현상이 계속되면 탐색의 효율이 크게 저하될 수 있다.

### 선형 조사법(linear probing)에 의한 해시 구현

[선형 조사법](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/hash-table/hash-table-linearProbing.js) 참조

## 닫힌 주소법(closed Addressing Method)

### 2. 체이닝(chainning, seperate channing)

- 해시 테이블의 하나의 위치에서 여러 개의 데이터를 저장할 수 있도록 해시 테이블의 구조를 변경한다.
- 여러 가지 방법이 있겠으나, 연결 리스트로 구현하는 것이 적절할 것이다!
- 크기가 한정 된 버킷을 효율적으로 사용할 수 있다.
  <img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/hash-table/img/chaining.png" width="400" height="300">

[체이닝](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/data-structures/hash-table/hash-table-chaining.js) 참조

## 해싱 장/단점

### 장점

- 인덱스(index)에 해시 값을 사용해서 모든 데이터를 살피지 않아도 **삽입/삭제을 편하게 수행할 수 있다.**
- 입력 키에 대해 언제나 동일한 해시 값을 리턴하고, 해당 키만 알면 **해시 테이블의 크기에 상관없이 데이터에 빠르게 접근할 수 있으며**, 인덱스는 계산이 간단한 함수(상수시간)로 작동하기 때문에 매우 효율적이다. 다시 말해, **데이터 액세스 시 시간 복잡도 O(1)을 지향한다.**
- 키와 해시값 사이에 직접적인 연관이 없기 때문에 해시값만 가지고는 키를 온전히 복원하기 어려워 **보안 분야에서 널리 사용된다.**
- 길이가 서로 다른 입력데이터에 대해 **일정한 길이의 출력을 만들 수 있어서 데이터를 축약할 수도 있다.**

### 단점

- 값의 순서가 없다. 따라서 정렬된 배열이나, 이진 탐색 트리에서처럼 어떤 값의 이전/이후 값을 쉽게 찾기 어렵다.
- 해시 테이블에서의 연산은 평균적으로 일정한 시간이 걸리지만 좋은 해시 함수의 비용은 배열이나 이진 탐색 트리의 검색 알고리즘의 내부 루프보다 상당히 클 수 있다. 따라서 해시 테이블은 항목 수가 매우 적으면 적합하지 않다.(해시 함수를 계산하는데 드는 높은 비용은 해시값을 키와 함께 저장하여 완화 할 수 있음)
- 충돌이 반복적으로 일어날 경우 시간 복잡도가 나빠질 수 있다.

## 해싱 복잡도

- **최선**의 경우 (충돌이 없거나 매우 적을 경우)<br>

| 삽입 | 삭제 | 검색 |
| :--: | :--: | :--: |
| O(1) | O(1) | O(1) |

- **최악**의 경우 (모든 데이터가 하나의 버킷에 집중되는 경우) <br>

| 삽입 | 삭제 | 검색 |
| :--: | :--: | :--: |
| O(n) | O(n) | O(n) |

## Reference

https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/

https://velog.io/@taeha7b/datastructure-hashtable

https://ko.wikipedia.org/wiki/%ED%95%B4%EC%8B%9C_%ED%95%A8%EC%88%98

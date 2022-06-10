# 탐색 (Search)

 1. [순차 탐색 (sequential search), 선형 탐색 (linear search)](#1-순차-탐색-sequential-search-선형-탐색-linear-search)
 2. [이진 탐색 (binary search)](#2-이진-탐색-binary-search)
 3. [해시 탐색 (hash search) (미완)](#3-해시-탐색-hash-search-미완)

 ## 1. 선형 탐색 (linear search) 순차 탐색 (sequential search)
 
+ 가장 간단하고 직접적인 탐색 방법
+ 배열의 요소들을 처음부터 마지막까지 하나씩 검사하여 값을 찾는다
+ 구현이 **간단하지만 비효율적**이다
<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/searching/img/linear-search.gif" width="400" height="150">    

### 선형 탐색 코드 (javascript)
  [**선형 탐색**](https://github.com/Iam-Sunghyun/javascript-algorithms/tree/main/src/algorithms/searching/linear-search.js) 


### 순차 탐색 복잡도

이름|시간복잡도|비고
:---:|:---:|:---:|
순차 탐색|O(n)||


<br>


 ## 2. 이진 탐색 (binary search)
 
+ **정렬된 배열에서 사용할 수 있는 탐색 방법**
   + 삽입, 삭제가 빈번한 데이터의 경우 매번 정렬해줘야 하기 때문에 적합하지 않을 수 있다
+ 중앙 값을 기준으로 찾고자 하는 값이 왼쪽에 있는지 오른쪽에 있는지 판단하여 범위를 줄여나가며 탐색한다 - **분할 정복(divide and conquer)**
+ 비교가 일어날 때마다 탐색 범위가 반씩 줄어들어 **매우 효율적인 탐색 방법**
+ 재귀(recursion)나 반복(loop)을 이용해 구현할 수 있다
<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/searching/img/binary-search1.jpg" width="400" height="300">    

### 이진 탐색 코드 (javascript)

  [**이진 탐색**](https://github.com/Iam-Sunghyun/javascript-algorithms/tree/main/src/algorithms/searching/binary-search.js) 참조 
 

### 이진 탐색 복잡도

이름|시간복잡도|비고
:---:|:---:|:---:|
이진 탐색|O(logn)||


<br>


## 3. 해시 탐색 (hash search) (미완)
 

<img src="" width="400" height="300">    

### 해시 탐색 코드 (javascript)
  []()


### 해시 탐색 복잡도

이름|시간복잡도|비고
:---:|:---:|:---:|
해시 탐색|||

# Reference
https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/linear-search
https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/search/binary-search
https://ratsgo.github.io/data%20structure&algorithm/2017/10/25/hash/

<br>
 
 

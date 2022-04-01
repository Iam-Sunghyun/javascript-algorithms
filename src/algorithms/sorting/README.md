# [Algorithm] 정렬 (Sort)

 1. [버블 정렬 (bubble sort)](#1-버블-정렬-bubble-sort)
 2. [선택 정렬 (selection sort)](#2-선택-정렬-selection-sort)
 3. [삽입 정렬 (insertion sort)](#3-삽입-정렬-insertion-sort)
 4. [셸 정렬 (shell sort)](#4-셸-정렬-shell-sort)
 5. [퀵 정렬 (quick sort)](#5-퀵-정렬-quick-sort)
 6. [합병 정렬 (merge sort)](#6-합병-정렬-merge-sort)
 7. [힙 정렬 (heap sort)](#7-힙-정렬-heap-sort)
 8. [기수 정렬 (radix sort) (미완)](#8-기수-정렬-radix-sort-미완)
 9. [계수 정렬 (counting sort) (미완)](#9-계수-정렬-counting-sort-미완)


 ## 1. 버블 정렬 (bubble sort)
 
+ **인접한 2개의 요소를 비교**하여 크기가 순서대로 되어 있지 않으면 서로 교환하여 정렬하는 알고리즘.
+ 이러한 **비교-교환 과정은 리스트 시작부터 끝까지 진행 한다.**
+ 비교-교환 과정이 한번 완료되면 가장 큰 값이 리스트 맨 오른쪽 끝으로 이동 된다. (오름차순)
+ 이 과정이 **더 이상 교환이 일어나지 않을 때 까지 수행** 된다.
+ 마치 물속에서 거품이 보글보글 떠오르는 것과 유사하여 버블 정렬이라 부른다.
+ 구현이 **간단하지만 비효율적**이다.

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/img/bubble-sort.gif" width="300" height="150">    


### 버블 정렬 코드 (javascript)
 [파일 참조](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/js/bubble-sort.js)



### 버블 정렬 복잡도

이름|최선|평균|최악|메모리|안정|비고
:---:|:---:|:---:|:---:|:---:|:---:|:---:|
버블 정렬|O(n)|O(n^2)|O(n^2)|O(1)|O||
+ 정렬되어 있는 데이터의 경우 최선 

## Reference

https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting

<br>

 ## 2. 선택 정렬 (selection sort)
 
+ **맨 앞의 요소를 선택한 후 나머지 값과 비교해서 가장 작은 값을 맨 앞쪽으로 옮기는 방법을 사용**.
+ 각 단계 마다 맨 앞 요소를 제외한 리스트에서 반복적으로 실행한다.
+ 버블 정렬과 마찬가지로 구현이 **간단하지만 비효율적**이다.
+ 자료 이동 횟수가 미리 결정된다는 장점이 있다. (교환 횟수가 적다)

### 선택 정렬 코드 (javascript)
  [파일 참조](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/js/selection-sort.js)


<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/img/selection-sort.gif" width="100" height="350">   

### 선택 정렬 복잡도

이름|최선|평균|최악|메모리|안정|비고
:---:|:---:|:---:|:---:|:---:|:---:|:---:|
선택 정렬|O(n^2)|O(n^2)|O(n^2)|O(1)|X||


## Reference
 
 https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting
 
 
<br><br>

 ## 3. 삽입 정렬 (insertion sort)
 
+ 새로운 요소의 값을 삽입 되어있는 데이터들과 비교하여 적절한 자리를 찾아가는 정렬 방법.
+ 손 안에 있는 카드 패 정렬과 유사한 방법.
   + 손 안에 정렬된 카드가 있고, 새로운 카드를 한 장씩 더 받을 때 마다 그 카드를 올바른 자리에 넣는다.
   + 삽입 후엔 정렬된 상태가 되어있어야 하고 새로 받는 모든 카드에 대해 수행한다!

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/img/insertion-sort.gif" width="300" height="150"> 


### 삽입 정렬 코드 (javascript)
  [파일 참조](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/js/insertion-sort.js)

### 삽입 정렬 분석
+ **어느정도 정렬 되어 있는 경우 매우 빠르다.**
+ 자료가 **역으로 정렬 되어 있는 경우 최악의 효율(O(n2))** 을 보여준다.
+ 비교적 많은 요소 이동이 필요하기 때문에 레코드 양이 많고 크기가 클 경우 적합하지 않다.

### 삽입 정렬 복잡도

이름|최선|평균|최악|메모리|안정|비고
:---:|:---:|:---:|:---:|:---:|:---:|:---:|
삽입 정렬|O(n)|O(n^2)|O(n^2)|O(1)|O||

## Reference

 https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting

<br><br>


## 4. 셸 정렬 (shell sort)

+ 가장 오래된 정렬 알고리즘 중 하나로, 1959년 'Donald L. Shell'이 **삽입 정렬의 성질을 이용, 보완하여 만든 알고리즘**.
+ 삽입 정렬이 **어느정도 정렬된 배열에 대해서는 매우 효율적인 것에 착안**하여 만들었다.     
+ 삽입 정렬의 문제점? 
   + 요소들이 삽입될 때, 이웃한 위치로만 이동.
   + 삽입되어야 할 위치가 현재 위치에서 매우 먼 곳이라면 많은 이동을 해야만 한다.
   + 삽입 정렬은 한 번에 한 요소의 위치만 결정되기 때문에 비효율적이다.
+ 삽입 정렬과 달리 셸 정렬은 전체의 리스트를 한 번에 정렬하지 않는다. (여러번 나눠서 정렬)
+ 여러 개의 부분 리스트를 만들어 삽입 정렬을 수행한다.
+ 각 단계마다 부분 리스트의 수를 줄여 가며 전체 리스트를 정렬한다.

 
### 셸 정렬 알고리즘 요약
1. 먼저 정렬해야 할 리스트를 일정한 **기준(gap)** 에 따라 분류하여 연속적이지 않은 여러 개의 부분 리스트를 생성.
2. 각 부분 리스트를 삽입 정렬을 이용하여 정렬.
3. 모든 부분 리스트가 정렬되면 다시 전체 리스트를 더 적은 개수의 부분 리스트로 만든 후에 삽입 정렬.
4. 부분 리스트의 개수가 1이 될 때까지 반복.

### 셸 정렬 예제  
+ 각 부분 리스트는 전체 리스트에서 거리가 k만큼 떨어진 요소들로 이루어짐. k를 **간격(gap)** 이라 한다.
   + 초기 간격은 배열 크기의 **절반으로 시작**한다.
   + 생성된 부분 리스트의 개수는 k(gap)와 같다.
+ 큰 간격으로 시작해서 **각 단계마다 간격 k를 절반으로 줄인다.** 
   + 간격(gap)은 **홀수**로 하는 것이 효율적인 것으로 알려져 있다.(짝수의 경우 +1) 
+ 단계가 진행 될수록 하나의 부분 리스트에 속하는 요소의 개수는 증가하고 전체 부분 리스트의 수는 감소한다.
+ 마지막 단계 즉, k = 1이 될 때까지 반복한다. 

```
입력 배열 : [5,3,8,4,9,1,6,2,7]   

간격 k=5의 부분 리스트 정렬 전 : [5,1] [3,6] [8,2] [4,7] [9]
간격 k=5의 부분 리스트 정렬 후 : [1,5] [3,6] [2,8] [4,7] [9]
1단계 완료 : [1,3,2,4,9,5,6,8,7]

간격 k=3의 부분 리스트 정렬 전 : [1,4,6] [3,9,8] [2,5,7] 
간격 k=3의 부분 리스트 정렬 후 : [1,4,6] [3,8,9] [2,5,7] 
2단계 완료 : [1,3,2,4,8,5,6,9,7]

간격 k=1의 부분 리스트 정렬 전 : [1,3,2,4,8,5,6,9,7]
간격 k=1의 부분 리스트 정렬 후 : [1,2,3,4,5,6,7,8,9]
3단계 완료 : [1,2,3,4,5,6,7,8,9]
```
[예제 참조](https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/shell-sort)

### 셸 정렬 코드 (javascript)
[파일 참조1](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/js/shell-sort.js) </br>
[파일 참조2](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/js/shell-sort.js) </br>

### 셸 정렬 분석

+ 연속적이지 않은 부분 리스트에서 자료의 교환이 일어나면 **더 큰 거리를 이동**한다. 따라서 교환되는 요소들이 삽입 정렬보다는 최종 위치에 있을 가능성이 높아진다. (오름차순이므로 큰 값들은 어느정도 뒤에 몰리고 작은 값들은 앞쪽에 몰리게 됨)
+ 부분 리스트가 **하나가 될 때 셸 정렬은 전체 리스트를 정렬**해야 한다. 그러나 그 시점엔 거의 정렬된 상태에서 삽입 정렬이므로 매우 효율적으로 수행된다.
+ 알고리즘이 간단하여 쉽게 구현할 수 있다.


### 셸 정렬 복잡도

이름|최선|평균|최악|메모리|안정|비고
:---:|:---:|:---:|:---:|:---:|:---:|:---:|
셸 정렬|O(nlogn)|O(n^1.5)|O(n^2),O(n(log^2)n)|O(1)|X| gap 크기에 따라 평균 복잡도 다르며 시간 복잡도 분석이 까다로운 편|

## Reference
 https://gmlwjd9405.github.io/2018/05/08/algorithm-shell-sort.html
 https://ko.wikipedia.org/wiki/%EC%85%B8_%EC%A0%95%EB%A0%AC    
 https://www.geeksforgeeks.org/shellsort/    


<br><br>


## 5. 퀵 정렬 (quick sort)

+ 평균적으로 **매우 빠른 수행 속도**의 알고리즘. 
+ **분할 정복(divide and conquer)** 사용한다.
+ 합병 정렬과 달리 피벗의 위치에 따라 리스트가 균등하게 분할되지 않을 수 있다. 

### 퀵 정렬 알고리즘 요약
1. 리스트의 한 요소를 **피벗(pivot)** 으로 선택한다. (보통 첫번째 요소 선택)
2. 피벗보다 작은 요소들은 피벗 왼쪽으로, 큰 값들은 피벗 오른쪽으로 모두 옮긴다.
   + low(코드에선left)는 피벗보다 큰 값, high(right)는 피벗보다 작은 값이 나올 때까지 탐색 후 서로 교환해준다.
3. 재귀를 이용해 피벗을 제외한 나머지 왼쪽, 오른쪽 부분 리스트에 대해서도 새롭게 피벗을 정하고 정렬한다.
4. 부분 리스트들이 더 이상 분할 할 수 없을때까지 반복한다.

### 퀵 정렬 예제     
     
     
<img src="./img/quick-sort.png" width="750" height="900">    


### 퀵 정렬 코드 (javascript)

 [퀵 정렬](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/js/quick-sort.js) 참조

## 퀵 정렬 분석

<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/img/quick-sort-worst-case.JPG" width="650" height="300">

+ **이미 정렬되어 있는 데이터의 경우(오름차순, 내림차순 둘 다) 부분 리스트가 불균등하게 나누어져 최악의 효율 O(n2)을 보여 준다.** </br>
+ 위 그림처럼 정렬되어 있는 데이터의 경우 불균등 분할로 인해 n번의 비교 단계가 발생하고 각 단계마다 n, n-1, n-2 ... 3, 2번의 비교가 이루어진다. 결론적으로 </br>
<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/img/quick-sort-worst-case-complexity.png" width="500" height="40">

+ **평균 O(nlogn)인 다른 정렬(힙, 합병)과 비교했을 때 가장 빠르다.**
   + 불필요한 데이터 이동을 줄이고 먼 거리의 데이터를 교환할 뿐 아니라, 한번 결정된 피벗들이 다음 연산에서 제외되는 등의 이유인 것으로 보인다. 
 </br>

### 퀵 정렬 복잡도
+ **퀵 정렬에서 리스트 분할이 항상 리스트의 가운데에서 이루어진다고 가정하면 logn번 수행 된다**. 각 단계마다 리스트 대부분의 레코드를 비교해야 하므로 평균 n번의 비교가 이루어진다. 결국 퀵 정렬은 비교 연산을 총 nlogn번 실행하여 **O(nlogn)** 이 된다.
레코드의 이동 횟수는 비교 횟수보다 적으므로 무시할 수 있다. 
+ **최악의 경우(불균등 분할) O(n2) 복잡도를 갖는다.**
</br>

이름|최선|평균|최악|메모리|안정|비고
:---:|:---:|:---:|:---:|:---:|:---:|:---:|
퀵 정렬|O(nlogn)|O(nlogn)|O(n^2)|O(n)|X|구현 방법에 따라 O(logn), O(1)의 메모리를 사용하는 듯|


## 퀵 정렬 개선 Median-Of-3 method
+ 불균등 분할을 방지하기 위해 **리스트의 맨 왼쪽, 오른쪽, 중간, 이 3개의 데이터의 값을 비교하여 중간 값을 피벗으로 선택하는 방법이 많이 사용 된다.**
+ 이 값이 Pivot으로 사용되어 전체 배열을 균등하게 분할한다는 보장은 없지만, 최소한 이 값이 전체 값 중 최대/최소값에는 해당하지 않기 때문에 평균적으로 O(nlogn)의 시간복잡도를 유지할 수 있게 된다.


## Reference

https://github.com/trekhleb/javascript-algorithms </br>
https://ko.wikipedia.org/wiki/%ED%80%B5_%EC%A0%95%EB%A0%AC
https://hongjw1938.tistory.com/31




<br><br>


## 6. 합병 정렬 (merge sort)

+ '존 폰 노이만(John von Neumann)'이 1945년에 개발한 알고리즘.
+ 퀵정렬 (Quick Sort) 함께 대표적으로 사용되는 빠른 정렬 알고리즘.
+ **분할 정복(devide and conquer)** 기법을 사용한다.
   + 하나의 문제를 더 작은 크기로 분할하고 분할된 부분을 해결한 다음, 결과를 모아서 원래 문제를 해결하는 방법.
   + 분할된 문제가 충분히 작지 않아 해결이 어렵다면, 분할을 반복한다 -> 일반적으로 **재귀**를 이용해 구현한다. 
 
### 합병 정렬 알고리즘 요약
1. 배열의 길이가 1이하 이면 정렬된 것으로 간주한다. 그렇지 않은 경우 아래와 같다.
2. **분할(divide)** : 입력 배열을 같은 크기의 2개의 부분 배열로 분할한다. 
3. **정복(conquer)** : 크기가 1이 된 부분 배열을 재귀적으로 합병 정렬을 이용해 정렬한다.  
4. **결합(mcombine)** : 정렬된 부분 배열들을 하나의 배열에 통합한다. 이때 정렬 결과가 임시배열에 저장된다.
5. 복사(copy) : 임시배열에 저장된 결과를 원래 배열에 복사한다.

### 합병 정렬 예제  
+ 합병 정렬에서 실제로 정렬이 이루어지는 시점은 **2개의  합병(merge)하는 단계**이다.
+ 2개의 부분 배열의 요소들을 처음부터 하나씩 비교하여 두 요소 중에서 더 작은 요소를 새로운 임시배열에 옮기는 과정을 반복한다.
+ 이것을 하나의 부분 배열이 끝날 때 까지 반복하고, 다른 배열의 남은 요소들을 전부 임시배열에 복사하면 합병이 종료된다.


<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/img/merge-sort.gif" width="350" height="200">       
입력 데이터 홀수인 경우 ↓
<img src="https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/img/merge-sort.svg" width="400" height="450">  


### 합병 정렬 코드 (javascript)
[파일 참조1](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/js/merge-sort.js) <br>
[파일 참조2](https://github.com/Iam-Sunghyun/javascript-algorithms/blob/main/src/algorithms/sorting/js/merge-sort2.js)

### 합병 정렬 분석

+ 입력 데이터의 정렬 정도에 상관 없이 동일한 시간이 소요된다.
+ 정렬 결과를 저장할 임시 배열이 필요하므로 **추가적인 메모리 공간이 소요**된다 -> 제자리 정렬이 아니다. (연결 리스트로 구성하면 제자리 정렬 가능하다함)

### 합병 정렬 복잡도
합병 정렬은 재귀 호출 구조로 되어있다. 입력 배열의 크기가 2^3이라 가정 할 때 분할되는 부분 배열의 크기는 입력 배열의 1/2씩 줄어듦으로 3번의 재귀 호출이 발생하게 된다. 따라서 입력 배열의 크기가 k=2^n 일 때 logn번의 재귀 호출이 발생하게 되는 것을 알 수 있다.    
하지만 합병 정렬이 실제로 정렬 연산을 수행하는 시점은 분할이 아닌 합병 단계이다. 합병 단계는 분할과 마찬가지로 logn번 수행하게 되며 각 단계마다 최대 n번의 비교 연산 + 2n번의 이동 연산이 수행되므로 T(n) = nlogn(비교 연산) + 2nlogn(이동 연산) = 3nlogn -> O(nlogn) 

이름|최선|평균|최악|메모리|안정|비고
:---:|:---:|:---:|:---:|:---:|:---:|:---:|
합병 정렬|O(nlogn)|O(nlogn)|O(nlogn)|O(n)|O| |

## Reference

https://ko.wikipedia.org/wiki/%ED%95%A9%EB%B3%91_%EC%A0%95%EB%A0%AC
https://github.com/trekhleb/javascript-algorithms
https://wonjayk.tistory.com/221
https://m.blog.naver.com/PostView.naver?isHttpsRedirect=true&blogId=k97b1114&logNo=140163896337


<br><br>


## 7. 힙 정렬 (heap sort)

+ **최대 힙 트리나 최소 힙 트리를 구성해 정렬을 하는 방법**.
   + 내림차순 정렬을 위해서는 최대 힙을 구성하고 오름차순 정렬을 위해서는 최소 힙을 구성하면 된다.
+ 전체 자료를 정렬하는 경우가 아니라 **가장 큰 값 혹은 작은 값 몇 개만 필요할 때**유용하다!


### 힙 정렬 알고리즘 요약
1. n개의 요소를 힙에 삽입한다. (insert()로 힙 트리로 만든다)
2. n번에 걸쳐 삭제 연산하여 얻은 값을 배열에 저장한다. delete()
 
### 힙 정렬 코드 (javascript)
[자료구조 힙](https://github.com/Iam-Sunghyun/javascript-algorithms/tree/main/src/data-structures/heap) 참조
+ 최대 힙의 경우 삭제 연산 후 오름차순 정렬을 위해 배열의 뒷 부분부터 저장한 것 유의!


### 힙 정렬 분석

+ 시간 복잡도가 효율적이다.
+ **불안정 정렬**이다.


### 힙 정렬 복잡도

힙은 삽입 삭제 연산 모두 O(nlogn)이 소요된다. 크기가 n인 데이터의 경우 n번의 삽입과(힙 트리 생성하면서) n번의 삭제를 통해 정렬하므로 전체 시간은 nlogn + nlogn = 2nlogn 결론적으로 O(nlogn)이 된다. 

이름|최선|평균|최악|메모리|안정|비고
:---:|:---:|:---:|:---:|:---:|:---:|:---:|
힙 정렬|O(nlogn)|O(nlogn)|O(nlogn)|O(1)|O||


## Reference
https://github.com/trekhleb/javascript-algorithms/tree/master/src/algorithms/sorting/heap-sort

<br><br>


## 8. 기수 정렬 (radix sort) (미완)

+ 지금까지의 정렬 방법들은 모두 값들을 비교하여 정렬한 것과 달리 **어떤 비교 연산도 없이** 데이터를 정렬하는 방법
+ O(nlogn)이라는 이론적 하한선을 깬 정렬 기법. 기수 정렬은 O(kn)의 복잡도를 갖는데 보통 k는 크지 않은 값이다
+ **기수(radix)** 란 숫자 표현에 기초가 되는 수를 말한다. 예를 들어 이진법에서의 기수는 2 (0,1) 십진법에선 10(0~9) 이다
+ 추가적인 메모리를 필요로 하나 이런 점을 감안하더라도 다른 정렬들 보다 빠르기 때문에 인기있는 정렬 기법 중 하나이다 

### 기수 정렬 알고리즘 요약
1. 

### 기수 정렬 예제  
+ **LSD (least significant digit)** 가장 낮은 자리수부터
+ **MSD (most significant digit)** 가장 높은 자리수부터
      
<img src="" width="400" height="450">  


### 기수 정렬 코드 (javascript)
[파일 참조1]()


### 기수 정렬 분석

+ 

### 기수 정렬 복잡도

이름|최선|평균|최악|메모리|안정|비고
:---:|:---:|:---:|:---:|:---:|:---:|:---:|
기수 정렬|O(n\*k)|O(n\*k)|O(n\*k)|O(n+k)|O| |

## Reference


## 9. 계수 정렬 (counting sort) (미완)



<br>

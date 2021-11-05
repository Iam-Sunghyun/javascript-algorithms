# [Algorithm] 정렬 (Sort)

## 목차   
 1. 버블 정렬 (bubble sort)
 2. 선택 정렬 (select sort)
 3. 삽입 정렬 (insertion sort)
 4. [셸 정렬 (shell sort)](#4-셸-정렬-shell-sort)
 5. 퀵 정렬 (quick sort)

## 4. 셸 정렬 (shell sort)

+ 가장 오래된 정렬 알고리즘 중 하나로, 1959년 'Donald L. Shell'이 **삽입 정렬의 성질을 이용, 보완하여 만든 알고리즘**
+ 삽입 정렬이 **어느정도 정렬된 배열에 대해서는 매우 효율적인 것**에 착안하여 만들었다     
+ 삽입 정렬의 문제점? 
   + 요소들이 삽입될 때, 이웃한 위치로만 이동
   + 삽입되어야 할 위치가 현재 위치에서 매우 먼 곳이라면 많은 이동을 해야만 한다
   + 삽입 정렬은 한 번에 한 요소의 위치만 결정되기 때문에 비효율적이다
   + 삽입 정렬과 달리 셸 정렬은 전체의 리스트를 한 번에 정렬하지 않는다   
 
### 셸 정렬 알고리즘 요약
1. 먼저 정렬해야 할 리스트를 일정한 기준(gap)에 따라 분류
2. 연속적이지 않은 여러 개의 부분 리스트를 생성 
3. 각 부분 리스트를 삽입 정렬을 이용하여 정렬
4. 모든 부분 리스트가 정렬되면 다시 전체 리스트를 더 적은 개수의 부분 리스트로 만든 후에 삽입 정렬
5. 부분 리스트의 개수가 1이 될 때까지 반복

### 셸 정렬 알고리즘 예제  
+ 각 부분 리스트는 전체 리스트에서 거리가 k만큼 떨어진 요소들로 이루어짐. k를 **간격(gap)** 이라 한다
   + 초기 간격은 배열 크기의 절반으로 시작한다
   + 생성된 부분 리스트의 개수는 k(gap)와 같다
+ 큰 간격으로 시작해서 각 단계마다 간격 k를 절반으로 줄인다. 
   + 간격이 짝수이면 1을 더하여 **홀수**로 하는 것이 좋은 것으로 알려져 있다 
+ 단계가 진행 될수록 하나의 부분 리스트에 속하는 요소의 개수는 증가하고 전체 부분 리스트의 수는 감소한다
+ 마지막 단계 즉, k = 1이 될 때까지 반복한다 

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

### 셸 정렬 코드 (python)

```
# Python3 program for implementation of Shell Sort
 
def shellSort(arr):
    gap = len(arr) // 2 # initialize the gap
 
    while gap > 0:
        i = 0
        j = gap
         
        # check the array in from left to right
        # till the last possible index of j
        while j < len(arr):
     
            if arr[i] >arr[j]:
                arr[i],arr[j] = arr[j],arr[i]
             
            i += 1
            j += 1
         
            # now, we look back from ith index to the left
            # we swap the values which are not in the right order.
            k = i
            while k - gap > -1:
 
                if arr[k - gap] > arr[k]:
                    arr[k-gap],arr[k] = arr[k],arr[k-gap]
                k -= 1
 
        gap //= 2
 
 
# driver to check the code
arr2 = [12, 34, 54, 2, 3]
print("input array:",arr2)
 
shellSort(arr2)
print("sorted array",arr2)
 
# This code is contributed by Shubham Prashar (SirPrashar)
```

### 셸 정렬 분석
+ 연속적이지 않은 부분 리스트에서 자료의 교환이 일어나면 더 큰 거리를 이동한다. 따라서 교환되는 요소들이 삽입 정렬보다는 최종 위치에 있을 가능성이 높아진다 (큰 들은 어느정도 뒤에 몰리고 작은 값들은 앞쪽에 몰리게 됨)
+ 부분 리스트가 하나가 되면 셸 정렬은 전체 리스트를 정렬해야 한다. 그러나 그 시점엔 거의 정렬된 상태에서 삽입 정렬이므로 매우 효율적으로 수행된다
+ 알고리즘이 간단하여 쉽게 구현할 수 있다

### 셸 정렬 시간 복잡도

+ 최악의 경우 : O(n^2)
+ 평균 : O(n^1.5)   

### 참고자료
 https://gmlwjd9405.github.io/2018/05/08/algorithm-shell-sort.html
 https://ko.wikipedia.org/wiki/%EC%85%B8_%EC%A0%95%EB%A0%AC    
 https://www.geeksforgeeks.org/shellsort/ 

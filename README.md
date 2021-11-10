# [Algorithm] 정렬 (Sort)

## 목차   
 1. 버블 정렬 (bubble sort)
 2. 선택 정렬 (select sort)
 3. 삽입 정렬 (insertion sort)
 4. [셸 정렬 (shell sort)](#4-셸-정렬-shell-sort)
 5. [퀵 정렬 (quick sort)](#5-퀵-정렬-quick-sort)
 6. [합병 정렬 (merge sort)](#6-합병-정렬-merge-sort)

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
파일 참조
```
# Python3 program for implementation of Shell Sort
 
def shellSort(arr):
    gap = len(arr) // 2 # initialize the gap
 
    while gap > 0:
        i = 0
        # gap이 홀수면 그대로 양수면 +1 -> gap의 값이 홀수인 것이 더 효율적이라 알려져 있음.
        j = gap if gap % 2 != 0 else gap + 1    
         
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
# https://www.geeksforgeeks.org/shellsort/
```

### 셸 정렬 분석
+ **불안정 정렬**이다
+ 연속적이지 않은 부분 리스트에서 자료의 교환이 일어나면 더 큰 거리를 이동한다. 따라서 교환되는 요소들이 삽입 정렬보다는 최종 위치에 있을 가능성이 높아진다 (오름차순이므로 큰 값들은 어느정도 뒤에 몰리고 작은 값들은 앞쪽에 몰리게 됨)
+ 부분 리스트가 하나가 되면 셸 정렬은 전체 리스트를 정렬해야 한다. 그러나 그 시점엔 거의 정렬된 상태에서 삽입 정렬이므로 매우 효율적으로 수행된다
+ 알고리즘이 간단하여 쉽게 구현할 수 있다


### 셸 정렬 시간 복잡도

+ 최악 : O(n^2)
+ 평균 : O(n^1.5) 
+ 최선 : O(n)  
+ 메모리 공간 : O(1)

### 참고자료
 https://gmlwjd9405.github.io/2018/05/08/algorithm-shell-sort.html
 https://ko.wikipedia.org/wiki/%EC%85%B8_%EC%A0%95%EB%A0%AC    
 https://www.geeksforgeeks.org/shellsort/    



## 5. 퀵 정렬 (quick sort)

+ 평균적으로 **매우 빠른 수행 속도**의 알고리즘 
+ **분할 정복(divide and conquer)** 사용한다
+ 합병 정렬과 달리 피벗의 위치에 따라 리스트가 균등하게 분할되지 않을 수 있다 

### 퀵 정렬 알고리즘 요약
1. 리스트의 한 요소를 **피벗(pivot)** 으로 선택한다 (보통 첫번째 요소 선택)
2. 피벗보다 작은 요소들은 피벗 왼쪽으로, 큰 값들은 피벗 오른쪽으로 모두 옮긴다
3. 피벗을 제외한 나머지 왼쪽, 오른쪽 리스트에 재귀를 이용해 다시 정렬한다
4. 부분 리스트들이 더 이상 분할 할 수 없을때까지 반복한다

### 퀵 정렬 알고리즘 예제  


```
```

### 퀵 정렬 코드 (python)
파일 참조
```
```

### 퀵 정렬 분석

+ **불안정 정렬**이다
+ 이미 정렬되어 있는 데이터와 같은 경우 부분 리스트가 불균등하게 나누어져 최악의 효율(O(n2))을 보여 준다
+ 평균 O(nlogn)인 다른 정렬과 비교했을 때 가장 빠르다
   + 불필요한 데이터 이동을 줄이고 먼 거리의 데이터를 교환할 뿐 아니라, 한번 결정된 피벗들이 다음 연산에서 제외되는 등의 이유인 것으로 보인다 

### 퀵 정렬 시간 복잡도
퀵 정렬에서 리스트 분할이 항상 리스트의 가운데에서 이루어진다고 가정하면 합병 정렬의 복잡도 분석과 마찬가지로 각 단계마다 1/2씩 리스트 크기가 1이 될 때까지 줄어들어
logn번 수행 된다. 각 단계마다 리스트 대부분의 레코드를 비교해야 하므로 평균 n번의 비교가 이루어진다. 결국 퀵 정렬은 비교 연산을 총 nlogn번 실행하여 O(nlogn)이 된다.
레코드의 이동 횟수는 비교 횟수보다 적으므로 무시할 수 있다. 

+ 최악 : O(n2) -> 이미 정렬되어 있는 경우
+ 평균 : O(nlogn)
+ 최선 : O(nlogn)      
+ 메모리 공간 : O(logn) ~ O(n)   

### 참고자료



## 6. 합병 정렬 (merge sort)

+ '존 폰 노이만(John von Neumann)'이 1945년에 개발한 알고리즘
+ 퀵정렬 (Quick Sort) 함께 대표적으로 사용되는 빠른 정렬 알고리즘
+ **분할 정복(devide and conquer)** 기법을 사용한다
   + 하나의 문제를 두 개의 균등한 크기로 분할하고 분할된 부분을 해결한 다음, 결과를 모아서 원래 문제를 해결하는 방법
   + 분할된 문제가 충분히 작지 않아 해결이 어렵다면, 분할을 반복한다 -> 일반적으로 **재귀**를 이용해 구현한다 
 
### 합병 정렬 알고리즘 요약
1. 배열의 길이가 1이하 이면 정렬된 것으로 간주한다. 그렇지 않은 경우 아래와 같다
2. **분할(divide)** : 입력 배열을 같은 크기의 2개의 부분 배열로 분할한다 
3. **정복(conquer)** : 크기가 1이 된 부분 배열을 재귀적으로 합병 정렬을 이용해 정렬한다  
4. **결합(mcombine)** : 정렬된 부분 배열들을 하나의 배열에 통합한다. 이때 정렬 결과가 임시배열에 저장된다
5. 복사(copy) : 임시배열에 저장된 결과를 원래 배열에 복사한다

### 합병 정렬 알고리즘 예제  
+ 합병 정렬에서 실제로 정렬이 이루어지는 시점은 **2개의  합병(merge)하는 단계**이다 
+ 2개의 부분 배열의 요소들을 처음부터 하나씩 비교하여 두 요소 중에서 더 작은 요소를 새로운 임시배열에 옮기는 과정을 반복한다
+ 이것을 하나의 부분 배열이 끝날 때 까지 반복하고, 다른 배열의 남은 요소들을 전부 임시배열에 복사하면 합병이 종료된다

```
```

### 합병 정렬 코드 (python)
파일 참조
```
# Python program for implementation of MergeSort
def mergeSort(arr):
    if len(arr) > 1:
  
         # Finding the mid of the array
        mid = len(arr)//2
  
        # Dividing the array elements
        L = arr[:mid]
  
        # into 2 halves
        R = arr[mid:]
  
        # Sorting the first half
        mergeSort(L)
  
        # Sorting the second half
        mergeSort(R)
  
        i = j = k = 0
  
        # Copy data to temp arrays L[] and R[]
        while i < len(L) and j < len(R):
            if L[i] < R[j]:
                arr[k] = L[i]
                i += 1
            else:
                arr[k] = R[j]
                j += 1
            k += 1
  
        # Checking if any element was left
        while i < len(L):
            arr[k] = L[i]
            i += 1
            k += 1
  
        while j < len(R):
            arr[k] = R[j]
            j += 1
            k += 1
  
# Code to print the list
  
  
def printList(arr):
    for i in range(len(arr)):
        print(arr[i], end=" ")
    print()
  
  
# Driver Code
if __name__ == '__main__':
    arr = [12, 11, 13, 5, 6, 7]
    print("Given array is", end="\n")
    printList(arr)
    mergeSort(arr)
    print("Sorted array is: ", end="\n")
    printList(arr)
  
# This code is contributed by Mayank Khanna
# https://www.geeksforgeeks.org/merge-sort/?ref=lbp
```

### 합병 정렬 분석

+ **안정 정렬**이다
+ 입력 데이터의 정렬 정도에 상관 없이 동일한 시간이 소요된다
+ 정렬 결과를 저장할 임시 배열이 필요하므로 **추가적인 메모리 공간이 소요**된다 -> 제자리 정렬이 아니다 (연결 리스트로 구성하면 제자리 정렬 가능하다함)

### 합병 정렬 시간 복잡도
합병 정렬은 재귀 호출 구조로 되어있다. 입력 배열의 크기가 2^3이라 가정 할 때 분할되는 부분 배열의 크기는 입력 배열의 1/2씩 2^3 -> 2^2 -> 2^1 -> 2^0 순으로 3번의 재귀 호출이 발생하게 된다. 따라서 입력 배열의 크기가 k=2^n 일 때 logn번의 재귀 호출이 발생하게 되는 것을 알 수 있다 
하지만 합병 정렬이 실제로 정렬 연산을 수행하는 시점은 분할이 아닌 합병 단계이다. 합병 단계는 분할과 마찬가지로 logn번 수행하게 되며 각 단계마다 최대 n번의 비교 연산 + 2n번의 이동 연산이 수행되므로 T(n) = nlogn(비교 연산) + 2nlogn(이동 연산) = 3nlogn -> O(nlogn)  ->..헷갈

+ 최악 : O(nlogn)
+ 평균 : O(nlogn)
+ 최선 : O(nlogn)      
+ 메모리 공간 : O(n)

### 참고자료

https://ko.wikipedia.org/wiki/%ED%95%A9%EB%B3%91_%EC%A0%95%EB%A0%AC
https://gmlwjd9405.github.io/2018/05/08/algorithm-merge-sort.html

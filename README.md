# [Algorithm] 정렬 (Sort)

## 목차   
 1. 버블 정렬 (bubble sort)
 2. 선택 정렬 (select sort)
 3. 삽입 정렬 (insertion sort)
 4. [셸 정렬 (shell sort)](#4-셸-정렬-shell-sort)
 5. 퀵 정렬 (quick sort)


## 4. 셸 정렬 (shell sort)

 * 가장 오래된 정렬 알고리즘 중 하나로, 1959년 'Donald L. Shell'이란 사람이 제안한 알고리즘    
 * 삽입 정렬이 어느정도 정렬된 배열에 대해서는 매우 빠른 것에 착안하여 만들었다     
     
  삽입 정렬의 최대 문제점: 요소들이 삽입될 때, 이웃한 위치로만 이동   
즉, 만약 삽입되어야 할 위치가 현재 위치에서 상당히 멀리 떨어진 곳이라면 많은 이동을 해야만 제자리로 갈 수 있다.   
삽입 정렬과 다르게 셸 정렬은 전체의 리스트를 한 번에 정렬하지 않는다.   


### 4.1 셸 정렬 알고리즘 
1. 먼저 정렬해야 할 리스트를 일정한 기준(gap)에 따라 분류
2. 연속적이지 않은 여러 개의 부분 리스트를 생성
3. 각 부분 리스트를 삽입 정렬을 이용하여 정렬
4. 모든 부분 리스트가 정렬 되면 gap의 크기를 줄여 다시 전체 리스트를 더 적은 개수의 부분 리스트로 만든 후에 삽입 정렬
5. 부분 리스트의 개수가 1이 될 때까지 반복

### 4.2 셸 정렬 코드 (python)

### 4.3 셸 정렬 장단점

### 참고자료
 https://gmlwjd9405.github.io/2018/05/08/algorithm-shell-sort.html
 https://ko.wikipedia.org/wiki/%EC%85%B8_%EC%A0%95%EB%A0%AC
 https://www.geeksforgeeks.org/shellsort/

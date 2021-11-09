import random

def quick_sort(array, start, end):
    if start >= end: # 원소가 1개인 경우 종료
        return
    pivot = start # 피벗은 첫 번째 원소
    left = start + 1
    right = end
    while(left <= right):
        # 피벗보다 큰 데이터를 찾을 때까지 반복 
        while(left <= end and array[left] <= array[pivot]):
            left += 1
        # 피벗보다 작은 데이터를 찾을 때까지 반복
        while(right > start and array[right] >= array[pivot]):
            right -= 1
        if(left > right): # 엇갈렸다면 작은 데이터와 피벗을 교체
            array[right], array[pivot] = array[pivot], array[right]
        else: # 엇갈리지 않았다면 작은 데이터와 큰 데이터를 교체
            array[left], array[right] = array[right], array[left]
    # 분할 이후 왼쪽 부분과 오른쪽 부분에서 각각 정렬 수행
    quick_sort(array, start, right - 1)
    quick_sort(array, right + 1, end)


def checksort(a):
    Sorted = True
    n = len(a)
    for i in range(n-1):
        if a[i] > a[i+1]:
            Sorted = False
        if not Sorted:
            break
    if Sorted: print('정렬 완료.')
    else: print('정렬 오류 발생.')
        

num_list = []

for i in range(20):
  num_list.append(random.randint(0, 100)) 

print("before sort = ", num_list)
quick_sort(num_list, 0, len(num_list) - 1)

print("after sort = ",num_list)
checksort(num_list)


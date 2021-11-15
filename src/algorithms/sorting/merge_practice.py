import random
import time

def mergesort(arr):
    if len(arr) > 1:
  
        mid = len(arr)//2
  
        # Dividing the array elements into 2 halves
        left = arr[:mid]
        right = arr[mid:]
  
        # Sorting the first half
        mergesort(left)
        mergesort(right)
  
        i = j = k = 0
  
        # Copy data to temp arrays L[] and R[]
        while i < len(left) and j < len(right):
            if left[i] < right[j]:
                arr[k] = left[i]
                i += 1
            else:
                arr[k] = right[j]
                j += 1
            k += 1
  
        # Checking if any element was left
        while i < len(left):
            arr[k] = left[i]
            i += 1
            k += 1
  
        while j < len(right):
            arr[k] = right[j]
            j += 1
            k += 1
   

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

# 20개 랜덤 정수 데이터 생성
for i in range(20):
  num_list.append(random.randint(0, 100)) 

print("before mergesort = ",num_list)
start_time = time.time()
mergesort(num_list)

finish_time = time.time()
print("after mergesort = ",num_list)
checksort(num_list)
print("time = {:.10f}".format(finish_time-start_time))



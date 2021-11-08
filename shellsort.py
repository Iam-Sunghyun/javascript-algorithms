import random
import time

def shell_sort(arr):
    gap = len(arr) // 2 # initialize the gap
 
    while gap > 0:
        
        i = 0
        # gap이 홀수면 그대로 양수면 +1
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
# 20개 정수 데이터 생성
for i in range(20):
  num_list.append(random.randint(0, 100)) 

print("before shellsort = ",num_list)
start_time = time.time()
shell_sort(num_list)

finish_time = time.time()
print("after shellsort = ",num_list)
checksort(num_list)
print("time = {:.10f}".format(finish_time-start_time))

    
# This code is contributed by Shubham Prashar (SirPrashar)  
# https://www.geeksforgeeks.org/shellsort/

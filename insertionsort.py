# 어느정도 정렬 되어있는 데이터에 효율적
import random

def insertion_sort1(a):
  length = len(a)
  for i in range(1,length):
    for j in range(i-1,-1,-1):
      if a[j+1] < a[j]:
        a[j+1] , a[j] = a[j] , a[j+1]
      else:
        break
    
  return a

num1 = []

for i in range(20):
  num1.append(random.randint(0, 100)) 

print(insertion_sort1(num1))


def insertion_sort2(arr):

  length = len(arr)
  key = 0

  for i in range(1,length):
    key = arr[i]
    j = i-1
    while j >= 0 and key < arr[j] :
        arr[j + 1] = arr[j]
        j -= 1
    arr[j + 1] = key
 
  return arr

num2 = []
for i in range(20):
  num2.append(random.randint(0, 100)) 

print(insertion_sort2(num2))


def insertion_sort3(a):  # insertion_sort2(a)와 거의 동일
  length = len(a)

  for i in range(1,length):
    key = a[i]
    j = i - 1
    while(j>=0):
      if key < a[j]:
        a[j+1] , a[j] = a[j], a[j+1]
      j -= 1

  return a

def checksort(arr):
    sorted = True
    for i in range(len(arr)-1):
      if arr[i] > arr[i+1]:
        sorted = False
      if not sorted:
        break
    if sorted: print("정렬 완료")
    else : print("정렬 오류")

num3 = []
for i in range(20):
  num3.append(random.randint(0, 100)) 


print(insertion_sort3(num3))
checksort(num3)

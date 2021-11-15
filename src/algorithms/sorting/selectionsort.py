# 변수, 함수, 속성 => 스네이크 케이스
# 클래스, 예외 => 파스칼 케이스

num_list = [1,3,4,2,7,8,9,11,5]
def selection_sort(a):

  length = len(a)
  min_index = 0
  for i in range(length-1):
    min_index = i
    for j in range(i+1,length):
      if a[min_index] > a[j]:
        min_index = j
    a[i] , a[min_index] = a[min_index] , a[i]

  return a

print(selection_sort(num_list))



num_list1 = [1,3,4,2,7,8,9,11,5]
def selection_sort(a):

  length = len(a)
  
  for i in range(length-1):
    
    for j in range(i+1,length):
      if a[i] > a[j]:
        a[i] , a[j] = a[j] , a[i]

  return a

print(selection_sort(num_list1))
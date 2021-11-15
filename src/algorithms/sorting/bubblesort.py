#1
def bubble_sort1(a):

  length = len(a)

  for i in range(length-1):
    for j in range(1+i,length-i):
      if a[i] > a[j]:
        a[i],a[j] = a[j],a[i]
      i = j   # 한번 더 연산이 들어가게 되는게 아쉽

  return a
num_list = [1,3,4,2,7,8,9,11,5]
print("bubble_sort1:",bubble_sort1(num_list))
    
#2
def bubble_sort2(arr):
    n = len(arr)
    print(arr)
    # Traverse through all array elements
    for i in range(n-1):

        # Last i elements are already in place
        for j in range(0, n-i-1):
 
            # traverse the array from 0 to n-i-1
            # Swap if the element found is greater
            # than the next element
            if arr[j] > arr[j+1] :
                arr[j], arr[j+1] = arr[j+1], arr[j]
        
        print(arr)
  
    return arr
# Driver code to test above
arr = [64, 34, 25, 12, 22, 11, 90]
print ("bubble_sort2:",bubble_sort2(arr))

#3
def bubble_sort3(arr):
    for i in range(len(arr) - 1, 0, -1):
        for j in range(i):
            if arr[j] > arr[j + 1]:
                arr[j], arr[j + 1] = arr[j + 1], arr[j]

arr = [64, 34, 25, 12, 22, 11, 90]
print ("bubble_sort3:",bubble_sort3(arr))
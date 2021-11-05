## shell_sort1 ##
def shell_sort1(arr):
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
                print(arr)
        gap //= 2
 
# driver to check the code
arr2 = [12, 34, 54, 2, 3]
print("input array:",arr2)
 
shell_sort1(arr2)
print("sorted array",arr2)
 
# This code is contributed by Shubham Prashar (SirPrashar)  
# https://www.geeksforgeeks.org/shellsort/


## shell_sort2 ##

def gapInsertionSort(x, start, gap):
    for target in range(start+gap, len(x), gap):
        val = x[target]
        i = target
        while i > start:
            if x[i-gap]> val:
                x[i] = x[i-gap]
            else:
                break
            i -= gap
        x[i] = val
        
def shellSort(x):
    gap = len(x) // 2
    while gap > 0:
        for start in range(gap):
            gapInsertionSort(x, start, gap)
        gap = gap // 2
    return x

# from -> https://elrion018.tistory.com/29

## shell_sort3 ##

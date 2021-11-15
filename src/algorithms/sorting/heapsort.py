# 루트 노드 인덱스 1부터 시작하는 최대 힙 트리
import random
class MaxHeap1(object):

  def __init__(self):
    self.queue = [None] # 0번 인덱스 null로 비워둠

  def insert(self,n):
    self.queue.append(n)
    i = len(self.queue) - 1  # 삽입 노드 위치 인덱스
   
    while i > 1: 
      # 부모 노드 루트 노드일 때까지 비교
      if self.queue[i//2] < self.queue[i] and 1 <= i//2: 
        self.queue[i//2], self.queue[i] = self.queue[i], self.queue[i//2]
      # 부모 노드의 인덱스도 교환
        i =  i//2    
      else: break


    # 힙에서 삭제 연산? -> 루트 노드 삭제
  def delete(self):
      i = len(self.queue) - 1
      if i <= 0 : # 힙에 아무 값도 없을 경우
        return -1
      self.queue[1] , self.queue[i] = self.queue[i] , self.queue[1]
      max = self.queue.pop()
      '''print(max)'''
      self.max_heapify(1) # 힙 트리 성질에 맞게 재 정렬
      return max


  def max_heapify(self,i):
    left = i * 2
    right = (i * 2) + 1
    max_index = i # 루트노드가 최대 값이라고 가정 후 스타트

    # 자식 노드들이 트리 범위 내에 있는지, 있다면 부모 노드 보다 큰 자식 노드 인덱스 를 max_index에 넣어줌
    if left <= len(self.queue) - 1 and self.queue[max_index] < self.queue[left]:
      max_index = left
    if right <= len(self.queue) - 1 and self.queue[max_index] < self.queue[right]:
      max_index = right
    
    # 자식 노드와 값 교환이 일어났을 경우 그 밑 트리에 대해서도 또 실행
    if max_index != i:
      self.queue[i], self.queue[max_index] = self.queue[max_index], self.queue[i]
      self.max_heapify(max_index)
'''
  def print_heap(self):
    j = 1
    for i in range(1,len(self.queue)):
      print(self.queue[i])
      i *= 2
'''

if __name__ == "__main__":
  maxheap = MaxHeap1()
  arr = []
  
  for i in range(10):
    arr.append(random.randint(0,100))

  print(arr)

  for j in range(len(arr)):
    maxheap.insert(arr[j])
  
  for x in range(len(arr)-1,-1,-1):
    arr[x] = maxheap.delete()
  
  print(arr)
  
# 백준 2075 : N번째 큰 수
# 5
# 12 7 9 15 5
# 13 8 11 19 6
# 21 10 26 31 16
# 48 14 28 35 25
# 52 20 32 41 49

import sys,heapq

N = int(input())
arr = []
for i in range(N):
  tmp = list(map(int,sys.stdin.readline().split()))
  
  if not arr:
    arr = tmp
    heapq.heapify(arr)
  else:
    for num in tmp:
      if num > arr[0]:
        heapq.heappop(arr)
        heapq.heappush(arr, num)

print(arr[0])






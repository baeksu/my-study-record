# boj 1253번 -좋다


import sys

N = int(sys.stdin.readline())
arr = list(map(int , sys.stdin.readline().split()))
arr.sort()
answer = 0

# 현재 값을 제외한 나머지 값들로 리스트를 만든 후에
# 더한값이 현재값이 나올 수 있는지 확인하자. 
for i in range(N):  
  left = 0
  right = len(arr)-1
  while(left < right):
    if left == i: 
      left+=1
      continue
    elif right == i: 
      right-=1
      continue
    
    if arr[left] + arr[right] == arr[i]:
      answer+=1
      break
    
    if arr[left] + arr[right] > arr[i]:
      right-=1
    else:
      left+=1

print(answer)
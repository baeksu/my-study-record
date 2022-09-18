# https://www.acmicpc.net/problem/16943
# 숫자 재배치

import sys

A,B = sys.stdin.readline().split()
list = []
visited = [0 for _ in range(len(A))]

int_B = int(B)
ans = -1;

def solution(depth ,list , visited):
  global ans
  if depth == len(A):
    int_A = int("".join(list))
    if int_A < int_B:
      ans = max(ans,int_A)
  
  for i in range(len(A)):
    if depth == 0 and A[i] == '0':
      continue
    if visited[i] == 1:
      continue
    
    visited[i] = 1
    list.append(A[i])
    solution(depth + 1, list, visited)
    visited[i] = 0
    del list[len(list)-1]

solution(0,list,visited)
print(ans)
    


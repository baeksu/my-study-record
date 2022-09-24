# boj 1253번 -좋다

# 풀이
# 1. N개의 숫자중에 2개를 뽑아서 더한값을 hashmap에 넣는다. (순서는 상관없다)
# 2. N개의 숫자를 key 값으로 해서 값이 존재하는지 확인
# 시간복잡도는 nC2 + NlogN (hash에 추가할때 시간복잡도가 이거였던거 같은데) 이 맞나..?

import sys

N = int(sys.stdin.readline())
list = list(map(int , sys.stdin.readline().split()))
hashMap = {}
answer = 0
mySet = set()

# 조합을 구현해서 한번 해보자
def dfs(depth, start, sum):
  if depth == 2:
    hashMap[sum] = 1
    return
  for i in range(start, N):
    dfs(depth+1,i+1,sum + list[i])
    
    
dfs(0 , 0 , 0)

for i in list:
  if hashMap.get(i) == 1:
    answer+=1
    
print(answer)
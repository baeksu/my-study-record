# 파이썬 문법 정리

## 2차원 배열 입력받을 때

요런식으로 입력이 들어올 때, 아래와 같이 받아올 수 있다. 개꿀
```
6 5
1 1 0 1 1
0 1 1 0 0
0 0 0 0 0
1 0 1 1 1
0 0 1 1 1
0 0 1 1 1 
```

```python
N,M = map(int, sys.stdin.readline().split())
picture_map = [list(map(int,sys.stdin.readline().split())) for row in range(0,N)]
```

## 문자열에서 문자 접근

```python
str = 'abcdef'

for ch in str:
  print(ch)


```

## 우선순위 큐
리스트를 heap 형태로 바꿀수 있네

```py
arr = [9,5,3,7,2]
heapq.heapify(arr)
print(arr)
heapq.heappop(arr)
print(arr)
heapq.heappush(arr,1)
print(arr)
print(arr[0])
```




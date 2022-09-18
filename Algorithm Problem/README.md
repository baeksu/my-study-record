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


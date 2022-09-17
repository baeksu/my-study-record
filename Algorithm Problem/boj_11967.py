# (1,1) 에서 bfs 를 돌릴거다.


import sys
from collections import deque, defaultdict

N, M = map(int, sys.stdin.readline().split())
room = [[0] * (N + 1) for row in range(0, N + 1)]
# 방에 존재하는 스위치 를 담고 2차원 배열
light_switch = defaultdict(list)

dy = [0,0,1,-1]
dx = [1,-1,0,0]

def solution():
    for i in range(0,M):
        x1, y1, x2, y2 = map(int,sys.stdin.readline().split())
        light_switch[(x1,y1)].append((x2,y2))
    print(bfs())

def bfs():
    # 불이 켜진 개수
    ans = 1
    visited = [[0] * (N + 1) for row in range(0, N + 1)]
    visited[1][1] = 1
    room[1][1] = 1
    Q = deque([(1,1)])

    while Q:
        x,y = Q.popleft()
        for a,b in light_switch[(x,y)]:
            if room[a][b] == 0:
                ans+=1
                room[a][b] = 1

                # 4방향 보고 갈 수 있는곳 찾아서 큐에 추가
                for dir in range(0,4):
                    na = a + dx[dir]
                    nb = b + dy[dir]
                    if not (1 <= na <= N and 1 <= nb <= N):
                        continue
                    if visited[na][nb] == 1:
                        Q.append((na,nb))

        for dir in range(0,4):
            nx = x + dx[dir]
            ny = y + dy[dir]

            if not (1<=nx <=N and 1<=ny <=N):
                continue
            if visited[nx][ny] == 0 and room[nx][ny] == 1:
                Q.append((nx,ny))
                visited[nx][ny] = 1;
    return ans

solution()

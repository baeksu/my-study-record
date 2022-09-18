# 1로 연결되어 있으면 그림. (대각선은 연결X)
# 첫재줄에 그림의 개수, 두번째 줄에 그림중에 제일 넓이가 큰거

# 입력받는게 아직 익숙하지가 않네 ㅠㅠ
#   1. map() 을 통해서 int형으로 받아와 -> ok 
#   2. split() 을 통해서 쪼개 -> ok
#   3. 이걸 list() 로 감싸주면 배열이 생성이 되버리네 개꿀



import sys
from collections import deque

N,M = map(int, sys.stdin.readline().split())

picture_map = [list(map(int,sys.stdin.readline().split())) for row in range(0,N)]
visited = [[0]*M for row in range(0,N)]
picture_count = 1
max_area = 0

dr = [0,0,1,-1]
dc = [1,-1,0,0]

def solution():
  global max_area
  global picture_count
      
  # 1 로 시작하면서 visited[][] == 0 인 애들은 bfs 를 돌려주자
  for i in range(0,N):
    for j in range(0,M):
      if picture_map[i][j] == 1 and visited[i][j] == 0:
        max_area = max(max_area,bfs(i,j))
        picture_count+=1
  
  print(picture_count-1)
  print(max_area)
  
def bfs(r,c):
  Q = deque([(r,c)])
  visited[r][c] = picture_count
  picture_area = 1
  
  while Q:
    r,c = Q.popleft()
    
    for dir in range(0,4):
      nr = r + dr[dir]
      nc = c + dc[dir]
      
      if not ( 0<= nr < N and 0<= nc < M): continue
      if picture_map[nr][nc] == 0: continue
      if visited[nr][nc] != 0: continue
      
      picture_area+=1
      visited[nr][nc] = picture_count
      Q.append((nr,nc))
  return picture_area
      
      
  
solution()
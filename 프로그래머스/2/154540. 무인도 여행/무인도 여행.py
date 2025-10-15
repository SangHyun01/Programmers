import sys
sys.setrecursionlimit(10**6)

def solution(maps):
    answer = []
    rows, cols = len(maps), len(maps[0])
    
    visited = [[False] * cols for _ in range(rows)]
    
    def dfs(x, y):
        if x < 0 or x >= rows or y < 0 or y >= cols or maps[x][y] == 'X' or visited[x][y]:
            return 0
    
        visited[x][y] = True
        current_food = int(maps[x][y])
    
        current_food += dfs(x + 1, y)
        current_food += dfs(x - 1, y)
        current_food += dfs(x, y + 1)
        current_food += dfs(x, y - 1)
        
        return current_food
    
    for i in range(rows):
        for j in range(cols):
            if maps[i][j] != 'X' and not visited[i][j]:
                # 이 부분이 수정되었습니다!
                island_sum = dfs(i, j)
                answer.append(island_sum)
                
    if not answer:
        return [-1]
    else:
        return sorted(answer)
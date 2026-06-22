class Solution:
    def islandsAndTreasure(self, grid: List[List[int]]) -> None:
        ROWS, COLS = len(grid), len(grid[0])
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]

        INF  = 2147483647


        def bfs(r, c):
            visit = [[False] * COLS for _ in range(ROWS)]
            deck = deque([(r, c)])
            steps = 0
            while deck:
                for i in range(len(deck)):
                    r, c = deck.popleft()
                    if grid[r][c] == 0:
                        return steps
                    for dr, dc in directions:
                        nr, nc = dr + r, dc + c
                        if (0 <= nr < ROWS and 0 <= nc < COLS and 
                                    not visit[nr][nc] and grid[nr][nc] != -1
                                ):

                            deck.append((nr, nc))
                            visit[nr][nc] = True
                steps += 1
            return INF

        for r in range(ROWS):
            for c in range(COLS):
                if grid[r][c] == INF:
                    grid[r][c] = bfs(r, c)
                


        



            

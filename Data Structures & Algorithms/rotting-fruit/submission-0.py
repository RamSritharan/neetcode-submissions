class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        ROWS, COLS = len(grid), len(grid[0])
        directions = [(1, 0), (0, 1), (-1, 0), (0, -1)]
        q = collections.deque()
        fresh = 0
        minute = 0

        for i in range(ROWS):
            for j in range(COLS):
                if grid[i][j] == 1:
                    fresh += 1
                if grid[i][j] == 2:
                    q.append((i, j))

        while fresh > 0 and q:
            for d in range(len(q)):
                r,c = q.popleft()
                for dr, dc in directions:
                    row, col = r + dr, c + dc
                    if (row >= ROWS or row < 0 or col >= COLS or col < 0):
                        continue
                    if grid[row][col] == 1:
                        grid[row][col] = 2
                        fresh -= 1
                        q.append((row, col))     
            minute += 1

        return minute if fresh == 0 else -1
            

                     
                    
                    



                

                
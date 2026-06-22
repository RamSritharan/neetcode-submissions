class TrieNode:
    def __init__(self):
        self.children = {}
        self.isWord = False

    def addword(self, word):
        cur = self
        for c in word:
            if c not in cur.children:
                cur.children[c] = TrieNode()
            cur = cur.children[c]
        cur.isWord = True
        

class Solution:
    def findWords(self, board: List[List[str]], words: List[str]) -> List[str]:
        root = TrieNode()
        for i in words:
            root.addword(i)

    
        ROWS, COLS = len(board), len(board[0])

        res, visit = set(), set()

        def dfs(root, r, c, word):
            if(r < 0 or c < 0 or r >= ROWS or c >= COLS 
            or (r, c) in visit or board[r][c] not in root.children):

                return

            visit.add((r, c))
            root = root.children[board[r][c]]
            word += board[r][c]

            if root.isWord:
                res.add(word)



            dfs(root, r + 1, c, word)
            dfs(root, r - 1, c, word)
            dfs(root, r, c + 1, word)
            dfs(root, r, c - 1, word)
            visit.remove((r, c))

        for r in range(ROWS):
            for s in range(COLS):
                dfs(root, r, s, "")           
               
        return list(res)

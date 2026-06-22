class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        
        res = []

        currSet = []
        total = 0
        candidates.sort()

        def dfs(i, cur, total):

            if  total == target:
                res.append(currSet.copy())
                return
            
            if total > target or len(candidates) == i:
                return

            currSet.append(candidates[i])
            dfs(i + 1, currSet, total + candidates[i])
            currSet.pop()

            while i + 1 < len(candidates) and candidates[i] == candidates[i+1]:
                i += 1
            dfs(i + 1, currSet, total)

        dfs(0, [], 0)

        return res

        

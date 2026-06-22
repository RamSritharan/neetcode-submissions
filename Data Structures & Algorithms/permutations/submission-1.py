class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        def dfs(i):

            if i == len(nums):
                return [[]]

            resPerms = []
            perms = dfs(i + 1)
            for p in perms:
                for r in range(len(p) + 1):
                    pCopy = p.copy()
                    pCopy.insert(r, nums[i])
                    resPerms.append(pCopy)
            return resPerms

        return dfs(0)

        



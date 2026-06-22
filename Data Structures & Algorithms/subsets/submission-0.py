class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res = []
        currSubset = []

        def dfs(i):
            if i >= len(nums):
                res.append(currSubset.copy())
                return


            currSubset.append(nums[i])
            dfs(i + 1)
            currSubset.pop()
            dfs(i + 1)

        dfs(0)

        return res
class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        
        res = []
        currSet = []
        nums.sort()

        def dfs(i):

            if len(nums) <= i:
                res.append(currSet.copy())
                return

            currSet.append(nums[i])
            dfs(i + 1)
            currSet.pop()

            while i + 1 < len(nums) and nums[i] == nums[i + 1]:
                i += 1
            dfs(i+1)        
        dfs(0)

        return res
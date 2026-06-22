class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        
        index = {}

        for i in range(len(s)):
            index[s[i]] = i 

        size = end = 0
        res = []
        for i, k in enumerate(s):
            size += 1
            if index[k] > end:
                end = index[k]

            if i == end:
                res.append(size)
                size = 0

        

        return res

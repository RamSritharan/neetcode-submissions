class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        digitToChar = {
            "2": "abc",
            "3": "def",
            "4": "ghi",
            "5": "jkl",
            "6": "mno",
            "7": "qprs",
            "8": "tuv",
            "9": "wxyz",
        }

        res = []

        def dfs(i, currStr):
            if len(currStr) == len(digits):
                res.append(currStr)
                return

            for d in digitToChar[digits[i]]:
                dfs(i + 1, currStr + d)

        if digits:
            dfs(0, "")

        return res


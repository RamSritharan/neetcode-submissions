class Solution:

    def encode(self, strs: List[str]) -> str:
        superStr = ""
        for i in strs:
            superStr += str(len(i)) + "#" + i
        return superStr

    def decode(self, s: str) -> List[str]:

        res, i = [], 0

        while i < len(s):
            j = i
            while s[j] != "#":
                j += 1
            length = int(s[i:j])
            i = j + 1
            j = i + length
            res.append(s[i:j])
            i = j
        return res

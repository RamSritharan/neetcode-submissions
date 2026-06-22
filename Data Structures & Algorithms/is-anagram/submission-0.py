class Solution:
    def isAnagram(self, s: str, t: str) -> bool:
        anaDict = {}
        anaDict2 = {}

        if len(s) != len(t):
            return False

        for a in s:
            anaDict[a] = 1 + anaDict.get(a, 0)
        
        for b in t:
            anaDict2[b] = 1 + anaDict2.get(b, 0)

        print(anaDict)
        print(anaDict2)

        if anaDict == anaDict2:
            return True
        else:
            return False

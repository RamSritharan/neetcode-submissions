class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        newList = defaultdict(list)

        for i in strs:
            newWord = " ".join(sorted(i))
            newList[newWord].append(i)

        return list(newList.values())
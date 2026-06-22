import heapq

class Solution:
    def kClosest(self, points: List[List[int]], k: int) -> List[List[int]]:
        
        distances =[]
        distDict = {}

        res = []

        for x, y in points:
            d = math.sqrt(((x - 0)**2) + ((y - 0)**2))
            distances.append([d, x, y])
            distDict[x, y] = d
        

        heapq.heapify(distances)

        while k > 0 :
            v1 = heapq.heappop(distances)
            print(v1)
            res.append([v1[1], v1[2]])
            k -= 1

        return res
# 
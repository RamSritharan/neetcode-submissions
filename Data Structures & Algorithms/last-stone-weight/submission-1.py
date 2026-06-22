import heapq

class Solution:
    def lastStoneWeight(self, stones: List[int]) -> int:
        
        heapq._heapify_max(stones)
        print(stones)
    

        while len(stones) > 1:
            heapq._heapify_max(stones)
            print(stones)

            v1 = heapq.heappop(stones)
            heapq._heapify_max(stones)

            v2 = heapq.heappop(stones)
            heapq.heappush(stones, v1 - v2)
            print(v1, v2)



        
        return stones[0]

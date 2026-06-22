import heapq

class Solution:
    def findKthLargest(self, nums: List[int], k: int) -> int:
        maxHeap = [- i for i in nums]
        heapq.heapify(maxHeap)

        while k > 0:
            res = heapq.heappop(maxHeap)
            if k == 1:
                return -res
            k -= 1
        

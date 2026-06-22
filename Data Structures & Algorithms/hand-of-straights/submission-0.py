class Solution:
    def isNStraightHand(self, hand: List[int], groupSize: int) -> bool:
        if len(hand) % groupSize:
            return False

        handMap = {}

        for i in hand:
            handMap[i] = handMap.get(i, 0) + 1
        
        minHeap = list(handMap.keys())

        heapq.heapify(minHeap)

        while minHeap:
            start = minHeap[0]
            for i in range(0, groupSize):
                nextNum = start + i
                if nextNum not in handMap:
                    return False
                handMap[nextNum] -= 1
                if handMap[nextNum] == 0:
                    if nextNum != minHeap[0]:
                        return False
                    heapq.heappop(minHeap)
        
        return True


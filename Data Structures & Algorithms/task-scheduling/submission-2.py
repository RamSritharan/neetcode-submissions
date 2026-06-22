class Solution:
    def leastInterval(self, tasks: List[str], n: int) -> int:
        
        count = Counter(tasks)
        maxHeap = [-cnt for cnt in count.values()]
        heapq.heapify(maxHeap)

        q = deque()
        time = 0

        while q or maxHeap:

            time += 1

            if not maxHeap:
                time = q[0][1]
            else:
                cnt = heapq.heappop(maxHeap) + 1
                if cnt:
                    q.append([cnt, time + n])

            if q and q[0][1] == time:
                amount = q.popleft()[0]
                heapq.heappush(maxHeap, amount)

        return time
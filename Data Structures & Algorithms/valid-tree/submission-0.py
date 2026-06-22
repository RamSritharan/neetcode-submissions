class Solution:
    def validTree(self, n: int, edges: List[List[int]]) -> bool:
        
        if len(edges) > (n - 1):
            return False 
        
        edgeMap = [[] for i in range(n)]

        #map the values to each other
        for i, k in edges:
            edgeMap[i].append(k)
            edgeMap[k].append(i)
        
        #create a visit set
        visit = set()
        def dfs(con, prev):
            #check to see if visit set is visited
            
            if con in visit:
                return False
            
            visit.add(con)
            #for loop for each neighbour, if a neighbour is from the prev, continue, if not check all neighbours.
            for nei in edgeMap[con]:
                if nei == prev:
                    continue
                if not dfs(nei, con):
                    return False
            return True
        #Make sure length of visit equals number of nodes and dfs starts with 0 and has a prev of -1
        return dfs(0, -1) and len(visit) == n




                

            

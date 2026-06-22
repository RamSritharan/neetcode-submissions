class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        


        if(s.length < 1){
            return 0
        }

        if(s.length < 2){
            return 1
        }

        let singleSet = new Set(s[0]);
        let total = 0;
        let localTotal = 0;

        let i = 0;
        let j = 1;

    

        while(j < s.length){
            if(singleSet.has(s[j])){
                localTotal = 0;
                i++;
                j = i; 
                singleSet.clear(); 
            }

            singleSet.add(s[j]);
            j++;
            localTotal = j - i;
            total = Math.max(localTotal, total);
        }

        return total;

    }
}

class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s, k) {

        let sLength = s.length;

        let repSet = new Map();

        let res = 0, maxRes = 0;
        let j = 0;

        for(let i = 0; i < sLength; i++){
            repSet.set(s[i], (repSet.get(s[i]) || 0) + 1);
            maxRes = Math.max(maxRes, repSet.get(s[i]))

            while(i - j - maxRes + 1 > k){
                repSet.set(s[j], repSet.get(s[j]) - 1);
                j++;
            } 
            res = Math.max(res, i - j + 1)
        }

        return res;



    }
}

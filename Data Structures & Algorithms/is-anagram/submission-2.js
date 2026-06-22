class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sDict = {}; 
        let tDict = {};

        if(s.length !== t.length){
            return false
        }

        for(const letter of s ){
            sDict[letter] = (sDict[letter] || 0) + 1;
        }
        for(const letter of t ){
            tDict[letter] = (tDict[letter] || 0) + 1 ;
         }

        for(const key in sDict){
            if(sDict[key] !== tDict[key]){
                return false
            }
        }


        return true
     };
    };
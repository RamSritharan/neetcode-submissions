class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s) {

        if(s.length < 1){
            return 0;
        }

        if(s.length == 2 && s[0] != s[1]){
            return 2
        }

        

        let numSet = new Set(); 
        let numsLen = s.length;
        let maxRes = 1;
        let res = 1;


        for(let i = 0; i < numsLen - 1; i++){
            let j = i + 1;

            while(j <= numsLen - 1){
                numSet.add(s[i]);

                if(numSet.has(s[j])){
                    res = 1;
                    numSet.clear()
                    console.log("r", i,j, res)

                    break;
                } else {
                    console.log(i,j, res)

                    numSet.add(s[j])
                    res += 1;
                    maxRes = Math.max(maxRes, res)

                    j++;
                    
                }
            }
        }

    return maxRes;

        
    }

}

class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        if(nums.length < 1){
            return 0
        }

        const lcs = nums.sort((a, b) => a - b);
        let tmp = 1;
        let res = 1;

        console.log(lcs)


        for(let i = 1; i < nums.length; i++){
            let diff = lcs[i]-lcs[i-1];

            if(diff == 1){
                tmp += 1;
            } else if(diff == 0){
                continue
            } else {
                tmp = 1
            }
            res = Math.max(res, tmp)
        }



        return res 
    }
    
}

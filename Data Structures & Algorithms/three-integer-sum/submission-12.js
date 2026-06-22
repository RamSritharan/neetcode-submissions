class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        let numsLength = nums.length;
        let res = [];

        nums.sort((a,b) => a - b)



        for(let i = 0; i < numsLength - 2; i++){
            let l = i + 1, r = numsLength - 1;

            if (i > 0 && nums[i] === nums[i - 1]) continue;


            while (l < r){
                let tmp = [nums[i], nums[l], nums[r]]; 
                let total = nums[i] + nums[l] + nums[r];

                if (total > 0){
                    r--;
                } else if (total < 0) {
                    l++;
                } else {
                    res.push(tmp)
                    l++;
                    r--;
                    while( l < r && nums[l] === nums[l - 1]){
                        l++;
                    }
                    
                }

            }
        }
        return res;
    }
}

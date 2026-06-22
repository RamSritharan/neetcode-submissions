class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {

        nums.sort((a, b) => a - b);
        let res = [];

        for(let i = 0; i < nums.length - 2; i++){


            if(i > 0 && (nums[i] === nums[i - 1])){
                    continue
                }

            let l = i + 1, r = nums.length - 1;


            while (l < r){

                let tmp = nums[i] + nums[l] + nums[r];
                let trip = [nums[i],nums[l], nums[r]];



                if(tmp === 0){
                    res.push(trip);
                    while(l < r && nums[r] === nums[r + 1]) r--;
                    while(l < r && nums[l+1] === nums[l]) l++;                    
                    r--;
                    l++;
                } else if (tmp > 0){
                    r--;
                } else if (tmp < 0){
                    l++;
                }
            } 

        
        }
        return res

    }
}

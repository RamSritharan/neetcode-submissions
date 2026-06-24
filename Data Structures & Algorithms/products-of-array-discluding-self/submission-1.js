class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prefix = new Array(nums.length).fill(1)
        let postfix = new Array(nums.length).fill(1);

        for(let i = 1; i < nums.length; i++){
            prefix[i] = prefix[i-1] * nums[i-1]
        }

        for(let j = nums.length-2; j >= 0; j--){
            postfix[j] = postfix[j+1] * nums[j+1];
        }

        console.log(prefix, postfix)

        let res = new Array();

        for(let x = 0; x < nums.length; x++){
            res[x] = prefix[x] * postfix[x];
        }

        return res
    }
}

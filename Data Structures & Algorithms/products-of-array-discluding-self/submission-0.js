class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {

        let prefix = new Array(nums.length).fill(1);
        let postfix = new Array(nums.length).fill(1);
        let res = []

        for(let i = 1; i < nums.length; i++){
            prefix[i] = nums[i-1] * prefix[i-1]
        }

        for(let j = nums.length - 2; j > -1; j--){
            postfix[j] = nums[j+1] * postfix[j+1]
        }

        for(let a = 0; a < nums.length; a++){
            res[a] = prefix[a] * postfix[a];
        }

        console.log(prefix, postfix)

        return res;

    }
}

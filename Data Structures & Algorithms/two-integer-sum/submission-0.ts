class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums: number[], target: number): number[] {
        
        const numsDict = new Map();

        for(let i=0; i<nums.length; i++){
            const diff = target - nums[i];
            if(numsDict.has(diff)){
                return [i, numsDict.get(diff)]
            };
            numsDict.set(nums[i], i); 
        }
        return []
    }
}

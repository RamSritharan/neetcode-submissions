class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {

        let freq = new Map();

        for(const a of nums){
            freq.set(a, (freq.get(a) || 0) + 1)
        }

        let newArr = Array();

        for(const [k, v] of freq){
            newArr.push([v, k])
        }

        newArr.sort((a, b) => a[0] - b[0]);

        console.log(newArr)

        let res =[];

        while(k > 0){
            let amount = newArr.pop()[1]
            res.push(amount);
            k--
        };

        return res


    };

};
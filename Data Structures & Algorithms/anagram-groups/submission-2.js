class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {

        const res = {};

        for(let s of strs){
            const output = new Array(26).fill(0);

            for(let i of s){
                output[i.charCodeAt(0) - 'a'.charCodeAt(0)] += 1
            }; 
                
            const key = output.join(',');

            if (!res[key]) {
                res[key] = [];
            }
            res[key].push(s);
        }
        return Object.values(res);
    }
}

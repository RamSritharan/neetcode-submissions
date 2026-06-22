class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let res = "";
        for(const str of strs){
            res += str
            res += ";";

        }

        return res;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {

        let res = [];
        let tmp = "";

        for(let a of str){
            if(a != ';'){
                tmp += a;
            } else {
                res.push(tmp)
                tmp = "";
            }
        }

        return res
    }
}

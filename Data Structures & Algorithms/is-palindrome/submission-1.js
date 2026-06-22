class Solution {
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s) {

        let i = 0, j = s.length - 1;

        while(i<j){

            while(i<j && !this.isAlpha(s[i])){
                    i++;
                }
            while(j>i && !this.isAlpha(s[j])){
                    j--;
                }
            

            if(s[i].toLowerCase() !== s[j].toLowerCase()){
                return false
            }
                i++;
                j--;
            }
            
            return true;

        }


    


    isAlpha(char) {
        if(char >= 'A' && char <= 'Z' ||
            char >= 'a' && char <= 'z' ||
            char >= '0' && char <= '9'){
                return true
            } else {
                return false
            }

    }
}

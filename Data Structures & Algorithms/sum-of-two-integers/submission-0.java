class Solution {
    public int getSum(int a, int b) {
        while (b != 0) {
            int carry = (a & b) << 1; //If both are 1s then there will be a carry, shifted to the left.
            a ^=b; 
            //XOR function which provides 1 only if 1 of (a or b) is 1, otherwise 0.
            b = carry;
            //When you keep adding the carry, eventually you won't have a carry and then you are done
        }
        return a;
    }
}
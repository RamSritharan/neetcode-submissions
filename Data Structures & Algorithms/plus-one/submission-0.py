class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        carry = 0

                    
        
        for i in range(len(digits) - 1, -1, -1):
            if digits[i] == 9 and i == len(digits) - 1:
                carry += 1
                digits[i] = 0
                continue
            elif i == len(digits)-1 and digits[i] < 9:
                digits[i] += 1
            else:
                if carry > 0 and digits[i] == 9:
                    digits[i] = 0                    
                elif carry > 0:
                    digits[i] += 1
                    carry -= 1
        
        print(carry)
        if digits[0] == 0 or carry > 0:
            digits.insert(0, 1)


        return digits
